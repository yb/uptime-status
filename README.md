# uptime-status
 A uptime status dashboard based on UptimeRobot API

## Docker

```shell
docker build -t uptime-status:local .

docker run -d -p 58080:80 --restart always --name uptime-status uptime-status:local 
```