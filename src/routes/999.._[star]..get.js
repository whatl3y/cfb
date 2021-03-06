import bunyan from 'bunyan'
import path from 'path'
import Slack from '../libs/Slack'
import RedisHelper from '../libs/RedisHelper'
import config from '../config'

const redisClient = new RedisHelper()
const log = bunyan.createLogger(config.logger.options)

export default async function Index(req, res) {
  // res.render('index', {})
  res.sendFile(path.join(__dirname, '..', '..', 'views', 'index.html'))

  try {
    let realClientIpAddress = (req.headers['x-forwarded-for'] || req.ip).split(
      ','
    )
    realClientIpAddress = realClientIpAddress[realClientIpAddress.length - 1]
    const redisCacheKey = `ip_recent_${realClientIpAddress}`
    const currentCache = await redisClient.get(redisCacheKey)
    if (currentCache) {
      await redisClient.set(redisCacheKey, 'true', { ttl: 60 * 10 })
    } else {
      const location = {}
      await Slack().send(
        `Someone visited the main page -- IP: ${realClientIpAddress} (location: ${location.city}, ${location.region_code}, ${location.country_name}), hostname: ${req.hostname}, User-Agent: ${req.headers['user-agent']}`
      )
      await redisClient.set(redisCacheKey, 'true', { ttl: 60 * 10 })
    }
  } catch (err) {
    log.error('Error sending slack message', err)
  }
}
