import { useEffect } from "react";
import { useRecoilState } from "recoil";
import {
  KakaoMapAddress,
  KakaoMapLa,
  KakaoMapMa,
} from "../../../commons/store";

declare const window: typeof globalThis & {
  kakao: any;
};
export default function KakaoMapPageDetail() {
  const [mapAddress, setMapAddress] = useRecoilState(KakaoMapAddress);
  const [la, setLa] = useRecoilState(KakaoMapLa);
  const [ma, setMa] = useRecoilState(KakaoMapMa);
  useEffect(() => {
    console.log(la);
    const script = document.createElement("script"); // <script></script>
    script.src =
      "//dapi.kakao.com/v2/maps/sdk.js?appkey=00a9133a09e38aabc4c96d4fcf01feba&autoload=false&libraries=services";

    document.head.appendChild(script);

    script.onload = () => {
      window.kakao.maps.load(function () {
        const container = document.getElementById("map"); // 지도를 담을 영역의 DOM 레퍼런스
        const options = {
          // 지도를 생성할 때 필요한 기본 옵션
          // center: new window.kakao.maps.LatLng(props.data.lng, props.data.lat),
          center: new window.kakao.maps.LatLng(ma, la), // 지도의 중심좌표.
          // center: new window.kakao.maps.LatLng(ma, la), // 지도의 중심좌표.
          level: 3, // 지도의 레벨(확대, 축소 정도)
        };

        // 마커가 표시될 위치입니다
        const map = new window.kakao.maps.Map(container, options); // 지도 생성 및 객체 리턴

        const markerPosition = new window.kakao.maps.LatLng(ma, la);

        // 마커를 생성합니다
        const marker = new window.kakao.maps.Marker({
          position: markerPosition,
        });

        // 마커가 지도 위에 표시되도록 설정합니다
        marker.setMap(map);

        // 아래 코드는 지도 위의 마커를 제거하는 코드입니다
        // marker.setMap(null);
      });
    };
  }, []);
  return <div id="map" style={{ width: "360px", height: "252px" }}></div>;
}
