const points = [{ "name": "Web/Wap", "value": 80 }, { "name": "Java", "value": 70 }, { "name": ".NET", "value": 60 }, { "name": "MySql", "value": 60 }, { "name": "SQL Server", "value": 60 }, { "name": "MAVEN", "value": 60 }, { "name": "Spring", "value": 40 }, { "name": "MyBatis", "value": 40 }, { "name": "GIT/SVN", "value": 40 }, { "name": "LINUX", "value": 30 }, { "name": "Redis", "value": 20 }, { "name": "Android", "value": 10 }, { "name": "RabbitMQ", "value": 10 }, { "name": "ZooKeeper", "value": 10 }, { "name": "Netty", "value": 10 }, { "name": "Docker", "value": 5 }];
const html = [];
const $pointContainer = document.getElementById('pointContainer');
points.sort(function (a, b) {
    return (b.value - a.value)
});
for (const i in points) {
    const point = points[i];
    html.push('<li><label>' + point.name + '</label><span><em style="width: ' + point.value + '%;"></em></span></li>');
}
$pointContainer.innerHTML = html.join('\n');