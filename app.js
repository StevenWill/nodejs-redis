// Redis client documentation:
// https://github.com/mranney/node_redis
// Redis commands: http://redis.io/commands

var redis = require("redis"),
    client = redis.createClient();
 
client.on("error", function (err) {
    console.log("Error " + err);
});
 
client.hset("nid:21", "title", "Hello World", redis.print);
client.hset("nid:21", "body", "Lori Ipsum", redis.print);
client.hkeys("nid:21", function (err, items) {
    console.log(items.length + " items:");
    items.forEach(function (item, i) {
        console.log("-" + i + ": " + item);
    });
    client.quit();
});

client.hget("nid:21", "title", redis.print);
client.hget("nid:21", "body", redis.print);
