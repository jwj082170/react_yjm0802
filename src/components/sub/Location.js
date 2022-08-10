import Layout from '../common/Layout';
import { useRef, useEffect } from 'react';

function Location() {
	const { kakao } = window;
	//카카오 맵이 들어갈 프레임이 담길 빈 참조객체 생성
	const container = useRef(null);

	//호출할 지도의 위도, 경도값, 줌레벨을 설정하는 객체 생성
	const option = {
		center: new kakao.maps.LatLng(33.450701, 126.570667),
		level: 3,
	};

	//기존의 option객체의 center키값에 등록되어 있는 위치값을 마커의 위치로 지정할 객체 생성
	const markerPosition = option.center;

	//위의 markerPostion을 인수로 해서 마커 정보값 리턴하는 구문 호출
	const marker = new kakao.maps.Marker({
		position: markerPosition,
	});

	//가상돔 요소가 브라우저에 마운트 되면
	useEffect(() => {
		//위의 정보값들을 이용해서 지도 인스턴스 생성
		const map_instance = new kakao.maps.Map(
			container.current,
			option
		);
		//지도 인스턴스 값을 활용해서 마커도 세팅
		marker.setMap(map_instance);
	}, []);

	return (
		<Layout name={'Location'}>
			{/* 지도를 요소에 참조객체 등록 */}
			<div id='map' ref={container}></div>
		</Layout>
	);
}

export default Location;
