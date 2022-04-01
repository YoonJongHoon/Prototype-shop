// components/Header.jsx

export default function Header() {
  return (
    <header>
      <div className="header__container">
        <div className="title">Y2 Mall</div>
        <div className="subtitle">
          Y2몰에 오신것을 환영합니다. 이곳에서 상품상세를 보고, 상품을 담고 취소
          또는 전체 취소를 할 수 있습니다.
        </div>
        <div className="btn__area">
          <a href="https://www.protopie.io" target="_BLANK" rel="noreferrer">
            <button>ProtoPie 사용하기</button>
          </a>
        </div>
      </div>
    </header>
  );
}
