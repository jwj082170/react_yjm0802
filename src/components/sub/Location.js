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

	//마커의 위치 정보값 설정
	const markerPosition = option.center;

	//마커의 이미지 정보값 설정
	const imgSrc =
		process.env.PUBLIC_URL + '/img/marker1.png';
	const imgSize = new kakao.maps.Size(232, 99);
	const imgOpt = {
		offset: new kakao.maps.Point(116, 99),
	};
	const markerImage = new kakao.maps.MarkerImage(
		imgSrc,
		imgSize,
		imgOpt
	);

	//위의 정보값을 통해 마커 생성
	const marker = new kakao.maps.Marker({
		position: markerPosition,
		image: markerImage,
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
