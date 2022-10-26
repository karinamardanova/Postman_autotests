//autotest for any method https://swapi.dev/api

pm.test("Verify status code is 200", function () {
    pm.response.to.have.status(200);
});

pm.test("Body matches string", function () {
    pm.expect(pm.response.text()).to.include("blue-gray");
});

pm.test("Response time is less than 100ms", function () {
    pm.expect(pm.response.responseTime).to.be.below(100);
});

// https://swapi.dev/api/planets/7

pm.test("Content-Type is present", function () {
    pm.response.to.have.header("Content-Type");
});

pm.test("Verify that diameter equals 4900", function () {
    var jsonData = pm.response.json();
    pm.expect(jsonData.diameter).to.eql('4900');
});

pm.test("All projects is deleted", function () {
    var jsonData = JSON.parse(responseBody);
    for (var i = 0; i < jsonData.length; i++) {
        pm.expect(jsonData[i].isDeleted).to.eql(false)
    }
});

// https://swapi.dev/api/starships/5

pm.test("Cookie JSESSIONID is present", () => {
  pm.expect(pm.cookies.has('JSESSIONID')).to.be.false;
});

pm.test("Successful GET request", function () {
    pm.expect(pm.response.code).to.be.oneOf([200]);
});
pm.test("Status code name has string", function () {
    pm.response.to.have.status("OK");
});

// http://api.hh.ru