export default {
  async fetch(request, env) {
    return await handleRequest(request).catch(
    (err) => new Response(err.stack, { status: 500 })
    );
  },
};
  
async function handleRequest(request) {
  const { pathname } = new URL(request.url);
  const domain = (new URL(request.url));
  const base = domain.hostname;

  const gjj = `# https://github.com/buwanla/sichuan
hostname = zfbjkt.scdsjzx.cn
^https?://zfbjkt.scdsjzx.cn/papi/t/tpgethsjcfromsichuan url 302 https://` + base + `/pcr-test
^https?://zfbjkt.scdsjzx.cn/papi/t/tpscansceneinfo url 302 https://` + base + `/covid-scan
`;

  if (pathname.startsWith("/re")) {
    return new Response(gjj, {
      headers: { "Content-Type": "text/plain" },
    });
  }

  if (pathname.startsWith("/pcr-test")) {
    let d0 = new Date(Date.now() - 1000 * 60 * 60 * 3);
    let str0 = d0.toISOString();
    let d1 = new Date();
    d1.setDate(d1.getDate() - 1);
    d1.setHours(9);
    let str1 = d1.toISOString();
    let d2 = d1;
    d2.setDate(d1.getDate() - 1);
    d2.setHours(8);
    let str2 = d2.toISOString();
    let d3 = d1;
    d3.setDate(d1.getDate() - 1);
    d3.setHours(7);
    let str3 = d3.toISOString();
    // 可以修改 loc 用于省内通行
    let loc = "成都市疾病预防控制中心";
    let obj = {"errcode" : "0","data" : [{"hscysj" : str1,"hsjcsj" : str0,"hsjcjq" : "阴性","hsjcjgmc" : loc,"inDay7" : true,"xm" : "**","zjhm" : "******************","hsjcjg" : "阴性"},{"hscysj" : str2,"hsjcsj" : str1,"hsjcjq" : "阴性","hsjcjgmc" : "成都市第二人民医院","inDay7" : true,"xm" : "**","zjhm" : "******************","hsjcjg" : "阴性"},{"hscysj" : str3,"hsjcsj" : str2,"hsjcjq" : "阴性","hsjcjgmc" : "成都市第三人民医院","inDay7" : true,"xm" : "**","zjhm" : "******************","hsjcjg" : "阴性"}],"requestId" : null,"errmsg" : "SUCCESS"};
    let myData = JSON.stringify(obj);
    return new Response(myData, {
      headers: { "Content-Type": "application/json;charset=UTF-8" },
    });
  }

  if (pathname.startsWith("/covid-scan")) {
    let obj = {"errcode":"0","data":{"code_data":{"place_address":"天府大道南段直通新加坡","place_child_type_name":"社区、小区","county_name":"天府新区","place_type_name":"居住场所","place_name":"","province_name":"四川省","city_name":"成都市"},"health_info":{"cid_type":"10","rule_number":"","is_visited_overseas":"0","is_isolation":"0","living_address":{"address":"********","city":"成都市","county_code":"510110","county":"***","city_code":"5101","province_code":"51","province":"四川省"},"report_valid_date":"2022-10-10 10:10:10","name":"*成","report_date":"2022-09-01 18:00:00","is_reported_in_24hours":false,"report_valid_date_gettime":1777777777777,"gender":"01","current_status":"04","guide":"","other_symptom":"","phone":"188*****881","high_risk_area":[],"cid":"11**************19","reason":"","report_expired":false,"is_contacted":"0","risk_assessment_grade":"00","housing_type":"01","current_symptom":"01"}},"requestId":"","errmsg":"SUCCESS"};
    let myData = JSON.stringify(obj);
    return new Response(myData, {
      headers: { "Content-Type": "application/json;charset=UTF-8" },
    });
  }

  return fetch("https://httpbin.org");
}
