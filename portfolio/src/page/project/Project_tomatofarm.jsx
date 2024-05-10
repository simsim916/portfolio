import { useState } from "react";

const Project_tomatofarm = () => {
    const [open, setOpen] = useState(true);
    return (
        <div className='project'>
            <div onClick={() => setOpen(!open)} className='title'>
                <h4>토마토팜</h4>
                <hr />
                <i className={`fa-solid fa-caret-${open ? 'up' : 'down'}`}></i>
            </div>
            {open &&
                <div className="project_content">
                    <h5>홈페이지 링크</h5>
                    <p><a href='http://www.tomatofarm.shop' target="_blank">http://www.tomatofarm.shop</a></p>
                    <h5>제작과정 (notion)</h5>
                    <p><a href='https://simsim916.notion.site/825da1d0f3d34b3e91a4d539a92d9720?pvs=4'>노션에서 자세히 보기</a></p>
                    <h5>제작기획</h5>
                    <p>밀키트, 식재료 판매 <span>온라인 쇼핑몰</span></p>
                    <p>홈페이지를 서비스하면서 만들어지는 <b>데이터(사용자 관심상품, 사용자 방문기록, 아이템 조회수)를 수집</b>하여<br /> 홈페이지 내에서 재사용 가능한 쇼핑몰</p>
                    <h5>제작기간 / 인원</h5>
                    <p>24.02.26 ~ 24.05.04 (약 2~3개월)</p>
                    <p>풀스택 개발자 3인 (본인 포함)</p>
                    <h5>핵심 기능</h5>
                    <p>검색 필터, 최근 검색어 등의 <span>검색 편의 기능</span></p>
                    <p><span>Redux</span>를 활용한 알림창 기능</p>
                    <p>로그인 시 <span>최근 본 상품, 최근 구매한 상품 태그</span> 기능</p>
                    <p>채팅을 활용한 간단한 문의 상담 기능</p>
                    <p>관리자 페이지를 활용한 <span>상품 수정, 이벤트 관리</span></p>
                    <h5>프로젝트 기여</h5>
                    <p>프로젝트 팀장</p>
                    <p>프로젝트 기획 설계, 작업 환경 구축</p>
                    <p>데이터베이스 설계</p>
                    <p>팀원들 코드 보완, 코드 병합</p>
                    <p>AWS 배포</p>
                </div>}
        </div>
    );
}

export default Project_tomatofarm;