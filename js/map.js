//jQuery 즉시 실행함수 써야함
( function($){

    //function get_pointer (해당주소,대상지도 id,title) {
        function get_pointer (address,getid,title) {
            naver.maps.Service.geocode({
                address: address
            }, function(status, response) {
                if (status !== naver.maps.Service.Status.OK) {
                    //return alert("Something wrong!");
                    console.log("주소에러");
                }
     
                var result = response.result, // 검색 결과의 컨테이너
                    items = result.items; // 검색 결과의 배열
     
                // do Something
                var x = eval(items[0].point.x);
                var y = eval(items[0].point.y);
     
                var HOME_PATH = window.HOME_PATH || ".";
     
                var cityhall = new naver.maps.LatLng(y, x),
                    map = new naver.maps.Map(getid, {
                        center: cityhall.destinationPoint(0, 50),
                        zoom: 14
                    }),
                    marker = new naver.maps.Marker({
                        map: map,
                        position: cityhall
                    });
     
     
                naver.maps.Event.addListener(marker, "click", function(e) {
                    if (infowindow.getMap()) {
                        infowindow.close();
                    } else {
                        infowindow.open(map, marker);
                    }
                });
    
            });
        }
//         var address = $('#company_map_text_1').text();
//         console.log(address)
    get_pointer("경기도 시흥시 정왕동 1704-2","map","NB로지스");


}(jQuery) );