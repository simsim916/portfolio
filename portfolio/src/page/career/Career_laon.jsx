import { useState } from "react";


const Career_laon = () => {
    const [open, setOpen] = useState(true);
    const [open1, setOpen1] = useState(false)
    const [open2, setOpen2] = useState(false)
    const [open3, setOpen3] = useState(false)
    const [open4, setOpen4] = useState(false)
    const [open5, setOpen5] = useState(false)

    return (
        <div className="Career_news">
            <div onClick={() => setOpen(!open)} className='career_title'>
                <h4>2017. 06 ~ 2023. 03</h4>
                <p>라온자리</p>
                <hr />
                <i className={`fa-solid fa-caret-${open ? 'up' : 'down'}`}></i>
            </div>
            {
                open &&
                <div className='career_content'>
                    <div onClick={() => setOpen1(!open1)} className="career_detail">
                        <div className="career_detail_title">
                            <i className={`fa-solid fa-caret-${open1 ? 'up' : 'down'}`}></i>
                            <h4>
                                <i className="fa-solid fa-briefcase" style={{ color: '#CA4046' }}></i>
                                슈퍼바이저
                            </h4>
                        </div>
                        {open1 &&
                            <div className="career_contents">
                                <p>라온에서 지사의 샌드위치 카페 프랜차이즈 <span>매장을 운영, 관리하는 슈퍼바이저로 근무</span>하였습니다.</p>
                                <p>스타트업 회사였던 라온에서 스타팅맴버 였던 저는,  <b>매장 2개로 시작해서 3년만에 연매출 30억을 달성</b>하고 6개의 직영매장, 4개의 가맹점을 운영, 관리 하였습니다.</p>
                            </div>
                        }
                    </div>
                    <div onClick={() => setOpen2(!open2)} className="career_detail">
                        <div className="career_detail_title">
                            <i className={`fa-solid fa-caret-${open2 ? 'up' : 'down'}`}></i>
                            <h4 >
                                <i className="fa-solid fa-message"></i>
                                새로운 지역에서의 새로운 도전
                            </h4>
                        </div>
                        {open2 &&
                            <div className="career_contents">
                                <p>삶에서 새로운 도전을 하고 싶어서 <b>고향인 경기도 안양을 떠나서 강원도 원주에서 이제 막 삽을 뜬 라온이라는 스타트업 회사에서 약 7년간 근무</b> 하였습니다.</p>
                                <p>새로운 지역에서의 회사생활 뿐만 아니라 이제 막 시작하는 <span>스타트업 회사의 창업 멤버로서 저에게는 하루하루가 ‘도전’ </span>이였습니다.</p>
                                <p>하지만, 7년간 매일매일 도전하면서 수많은 <span>성공과 실패가 저에게는 커다란 ‘발전’</span> 이였습니다.</p>
                            </div>
                        }
                    </div>
                    <div onClick={() => setOpen3(!open3)} className="career_detail">
                        <div className="career_detail_title">
                            <i className={`fa-solid fa-caret-${open2 ? 'up' : 'down'}`}></i>
                            <h4 >
                                <i className="fa-solid fa-message"></i>
                                슈퍼바이저가 처음 시작한 일이 전단지 돌리기?
                            </h4>
                        </div>
                        {open3 &&
                            <div className="career_contents">
                                <p>제가 처음 입사를 하고 회사에서 한 일은 원주의 모든 사무실, 공공기관에 들어가서 <span>모든 사람들에게 직접 전단지를 전달하는 일</span>이였습니다. 처음에는 사람들에게 민폐를 주는 것 같아서 너무 부끄러웠습니다.</p>
                                <p>하지만, 제가 먼저 <b>반가운 얼굴로 인사드리며 즐겁게 대화</b>를 하고나서는 ‘젋은 사람이 고생이 많다’, ‘이런거 처음 받아보는데 너무 새롭다’이런 이야기를 해주시면서 좋은 인연이 되어주셨습니다.</p>
                                <p>이때의 경험으로 저는 <span>어떤 두려움과 부끄러움에도 도전할 수 있는 용기</span>를 얻었습니다.</p>
                            </div>
                        }
                    </div>
                    
                    <div onClick={() => setOpen4(!open4)} className="career_detail">
                        <div className="career_detail_title">
                            <i className={`fa-solid fa-caret-${open2 ? 'up' : 'down'}`}></i>
                            <h4 >
                                <i className="fa-solid fa-message"></i>
                                맡은 일에 몰두하고 끝까지 해내는 끈기, 책임감
                            </h4>
                        </div>
                        {open4 &&
                            <div className="career_contents">
                                <p>라온에서 근무할 때 매장을 오픈하고, 큰 행사전에 매장을 준비하는 <span>관리자로써 저는 항상 맡은 일에 최선을 다하고 최선</span>을 다해 일에 미쳐있었습니다.</p>
                                <p>코로나 기간때 한 매장의 근무자들이 전부 근무하지 못할 때 매장을 책임지고 혼자서 근무하기도 하고 저희가 운영하던 매장의 리조트에서 큰 기관점검이 있을 때는 매장의 운영시간이 끝나고 6개의 매장의 점장님들과 함께 밤새 각자의 매장을 청소하고 점검하고 오전에 점검을 성공적으로 마친적도 있습니다.</p>
                                    <p>이러한 습관이 앞으로의 <span>어떤 일에도 끝까지 완수하는 끈기로 최선을 다하며 맡은 일에 몰두</span>하는 밑거름이 될 것입니다.</p>
                            </div>
                        }
                    </div>
                        <div onClick={() => setOpen5(!open5)} className="career_detail">
                            <div className="career_detail_title">
                                <i className={`fa-solid fa-caret-${open2 ? 'up' : 'down'}`}></i>
                                <h4 >
                                    <i className="fa-solid fa-message"></i>
                                    메뉴얼을 만들고 실무자들과 함께 발전시키는 메뉴얼
                                </h4>
                            </div>
                            {open5 &&
                                <div className="career_contents">
                                    <p>제가 일을 할 때 가장 중요하게 생각하는 것은 <span>‘매뉴얼’</span>입니다. 가장 기본이 되는 <b>회사의 매뉴얼을 만들고 각 매장에 맞게 실무자들과 토의하며 상황에 맞게끔 매뉴얼</b>을 만들어 가능 방식으로 일하는 것을 좋아합니다.</p>
                                    <p>여러 개의 매장을 운영하다보니 그러한 약속을 만들고 그 <b>약속을 바탕으로 일하는 것이 업무의 효율을 높이고 업무를 확장하는 것에도 더 효과적</b>이였습니다.</p>
                                    <p>이러한 경험이 자바를 공부하면서, 인터페이스나 모듈화라는 관점에 매력을 느끼고 공부에 더욱 흥미를 느꼈던 것 같습니다.</p>
                                </div>
                            }
                        </div>
                </div>
            }
        </div >
    );
}

export default Career_laon;