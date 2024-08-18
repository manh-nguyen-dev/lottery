import styles from "../styleAll.css";

export default function Header() {
  return (
    <>
        <header className={styles.header}>
        <div className="header-content headermobi">
          <div className="main-content">
            <span className="btn-pushbar-3" data-pushbar-target="left">
              <img
                alt="menu xo so"
                className="icon-menu"
                src="https://cdn.xoso.com.vn/images/ic_menu_24px.svg"
              />
            </span>
            <div className="header-logo">
              <a href="/">
                <img
                  alt="trang chu xo so"
                  className="header-logo-img"
                  src="https://cdn.xoso.com.vn/images/logo.svg"
                  width={135}
                  height={48}
                />
              </a>
            </div>
            <div className="header-right">
              <div className="header-time">Hôm nay: Thứ Tư ngày 07/08/2024</div>
              <a className="btn-calendar" href="/kqxs-07-08-2024.html">
                <img
                  alt="ket qua xo so hom nay"
                  className="icon-calendar"
                  src="https://cdn.xoso.com.vn/images/ic_event_24px.svg"
                />
              </a>
            </div>
          </div>
        </div>
        <div className="headpn">
          <nav className="nav_header">
            <span className="nav-scrol-link-ic" data-pushbar-target="left">
              <img
                alt="menu xo so"
                className="icon-menu2 lazy"
                src="data:image/gif;base64,R0lGODdhAQABAPAAAMPDwwAAACwAAAAAAQABAAACAkQBADs="
                data-src="https://cdn.xoso.com.vn/images/menu1.svg"
              />
            </span>
            <ul className="menu_ul">
              <li className="menu_li hide">
                <a href="/" className="menu_a" title="Trang chủ">
                  <img
                    alt="trang chu xo so"
                    className="icon-home"
                    src="https://cdn.xoso.com.vn/images/imghome.png"
                  />
                </a>
              </li>
              <li className="menu_li">
                <a
                  href="/xo-so-mien-bac/xsmb-p1.html"
                  className="menu_a"
                  title="XSMB"
                >
                  XSMB
                </a>
                <ul className="menu_down">
                  <li>
                    <a href="/xsmb-thu-2.html" title="Thứ 2">
                      Thứ 2
                    </a>
                  </li>
                  <li>
                    <a href="/xsmb-thu-3.html" title="Thứ 3">
                      Thứ 3
                    </a>
                  </li>
                  <li>
                    <a href="/xsmb-thu-4.html" title="Thứ 4">
                      Thứ 4
                    </a>
                  </li>
                  <li>
                    <a href="/xsmb-thu-5.html" title="Thứ 5">
                      Thứ 5
                    </a>
                  </li>
                  <li>
                    <a href="/xsmb-thu-6.html" title="Thứ 6">
                      Thứ 6
                    </a>
                  </li>
                  <li>
                    <a href="/xsmb-thu-7.html" title="Thứ 7">
                      Thứ 7
                    </a>
                  </li>
                  <li>
                    <a href="/xsmb-chu-nhat-cn.html" title="Chủ nhật">
                      Chủ nhật
                    </a>
                  </li>
                  <li>
                    <a
                      href="/tuong-thuat-mien-bac/xsmb-tructiep.html"
                      title="Trực tiếp"
                    >
                      Trực tiếp
                    </a>
                  </li>
                </ul>
              </li>
              <li className="menu_li">
                <a
                  href="/xo-so-mien-nam/xsmn-p1.html"
                  className="menu_a"
                  title="XSMN"
                >
                  XSMN
                </a>
                <ul className="menu_down">
                  <li>
                    <a href="/xsmn-thu-2.html" title="Thứ 2">
                      Thứ 2
                    </a>
                  </li>
                  <li>
                    <a href="/xsmn-thu-3.html" title="Thứ 3">
                      Thứ 3
                    </a>
                  </li>
                  <li>
                    <a href="/xsmn-thu-4.html" title="Thứ 4">
                      Thứ 4
                    </a>
                  </li>
                  <li>
                    <a href="/xsmn-thu-5.html" title="Thứ 5">
                      Thứ 5
                    </a>
                  </li>
                  <li>
                    <a href="/xsmn-thu-6.html" title="Thứ 6">
                      Thứ 6
                    </a>
                  </li>
                  <li>
                    <a href="/xsmn-thu-7.html" title="Thứ 7">
                      Thứ 7
                    </a>
                  </li>
                  <li>
                    <a href="/xsmn-chu-nhat-cn.html" title="Chủ nhật">
                      Chủ nhật
                    </a>
                  </li>
                  <li>
                    <a
                      href="/tuong-thuat-mien-nam/xsmn-tructiep.html"
                      title="Trực tiếp"
                    >
                      Trực tiếp
                    </a>
                  </li>
                </ul>
              </li>
              <li className="menu_li">
                <a
                  href="/xo-so-mien-trung/xsmt-p1.html"
                  className="menu_a"
                  title="XSMT"
                >
                  XSMT
                </a>
                <ul className="menu_down">
                  <li>
                    <a href="/xsmt-thu-2.html" title="Thứ 2">
                      Thứ 2
                    </a>
                  </li>
                  <li>
                    <a href="/xsmt-thu-3.html" title="Thứ 3">
                      Thứ 3
                    </a>
                  </li>
                  <li>
                    <a href="/xsmt-thu-4.html" title="Thứ 4">
                      Thứ 4
                    </a>
                  </li>
                  <li>
                    <a href="/xsmt-thu-5.html" title="Thứ 5">
                      Thứ 5
                    </a>
                  </li>
                  <li>
                    <a href="/xsmt-thu-6.html" title="Thứ 6">
                      Thứ 6
                    </a>
                  </li>
                  <li>
                    <a href="/xsmt-thu-7.html" title="Thứ 7">
                      Thứ 7
                    </a>
                  </li>
                  <li>
                    <a href="/xsmt-chu-nhat-cn.html" title="Chủ nhật">
                      Chủ nhật
                    </a>
                  </li>
                  <li>
                    <a
                      href="/tuong-thuat-mien-trung/xsmt-tructiep.html"
                      title="Trực tiếp"
                    >
                      Trực tiếp
                    </a>
                  </li>
                </ul>
              </li>
              <li className="menu_li">
                <a
                  href="/kqxs-vietlott-ket-qua-xo-so-vietlott.html"
                  className="menu_a"
                  title="Vietlott"
                >
                  Vietlott
                </a>
                <ul className="menu_down">
                  <li>
                    <a href="/xo-so-tu-chon-mega-645.html" title="Mega 6/45">
                      Mega 6/45
                    </a>
                  </li>
                  <li>
                    <a href="/xo-so-power-655.html" title="Power 6/55">
                      Power 6/55
                    </a>
                  </li>
                  <li>
                    <a href="/xo-so-max-3d.html" title="Max 3D">
                      Max 3D
                    </a>
                  </li>
                  <li>
                    <a href="/ket-qua-xs-keno.html" title="Xổ số Keno">
                      Xổ số Keno
                    </a>
                  </li>
                </ul>
              </li>
              <li className="menu_li">
                <a
                  href="/phan-tich-kqxs-c407-p1.html"
                  className="menu_a"
                  title="Phân tích"
                >
                  Phân tích
                </a>
                <ul className="menu_down">
                  <li>
                    <a
                      href="/phan-tich-kqxs-mien-bac-c411-p1.html"
                      title="Thống kê XSMB"
                    >
                      Thống kê XSMB
                    </a>
                  </li>
                  <li>
                    <a
                      href="/phan-tich-kqxs-mien-trung-c413-p1.html"
                      title="Thống kê XSMT"
                    >
                      Thống kê XSMT
                    </a>
                  </li>
                  <li>
                    <a
                      href="/phan-tich-kqxs-mien-nam-c412-p1.html"
                      title="Thống kê XSMN"
                    >
                      Thống kê XSMN
                    </a>
                  </li>
                  <li>
                    <a
                      href="/tin-tuc-xs-mega-645.html"
                      title="Thống kê XS Vietlott"
                    >
                      Thống kê XS Vietlott
                    </a>
                  </li>
                </ul>
              </li>
              <li className="menu_li">
                <a
                  href="/cau-mien-bac/cau-bach-thu.html"
                  className="menu_a"
                  title="Thống kê vị trí"
                >
                  Thống kê vị trí
                </a>
                <ul className="menu_down">
                  <li>
                    <a
                      href="/cau-mien-bac/cau-bach-thu.html"
                      title="Thống kê duy nhất XSMB "
                    >
                      Thống kê duy nhất XSMB{" "}
                    </a>
                  </li>
                  <li>
                    <a
                      href="/cau-mien-bac/cau-lat-lien-tuc.html"
                      title="Thống kê vị trí lật liên tục (XSMB)"
                    >
                      Thống kê vị trí lật liên tục (XSMB)
                    </a>
                  </li>
                  <li>
                    <a
                      href="/cau-mien-bac/cau-ve-nhieu-nhay.html"
                      title="Thống kê vị trí về nhiều lần (XSMB)"
                    >
                      Thống kê vị trí về nhiều lần (XSMB)
                    </a>
                  </li>
                  <li>
                    <a href="/cau-mien-trung.html" title="Thống kê vị trí XSMT">
                      Thống kê vị trí XSMT
                    </a>
                  </li>
                  <li>
                    <a href="/cau-mien-nam.html" title="Thống kê vị trí XSMN ">
                      Thống kê vị trí XSMN{" "}
                    </a>
                  </li>
                </ul>
              </li>
              <li className="menu_li">
                <a
                  href="/thong-ke-lo-gan.html"
                  className="menu_a"
                  title="Thống kê"
                >
                  Thống kê
                </a>
                <ul className="menu_down">
                  <li>
                    <a href="/thong-ke-lo-gan.html" title="Thống kê Lô gan">
                      Thống kê Lô gan
                    </a>
                  </li>
                  <li>
                    <a
                      href="/thong-ke-giai-dac-biet.html"
                      title="TK giải Đặc biệt"
                    >
                      TK giải Đặc biệt
                    </a>
                  </li>
                  <li>
                    <a href="/thong-ke-tong-hop.html" title="Thống kê tổng hợp">
                      Thống kê tổng hợp
                    </a>
                  </li>
                  <li>
                    <a
                      href="/thong-ke-dau-duoi.html"
                      title="Thống kê Đầu - Đuôi"
                    >
                      Thống kê Đầu - Đuôi
                    </a>
                  </li>
                  <li>
                    <a
                      href="/thong-ke-tan-suat.html"
                      title="Tần suất xuất hiện"
                    >
                      Tần suất xuất hiện
                    </a>
                  </li>
                  <li>
                    <a href="/thong-ke-00-99.html" title="TK từ 00 đến 99">
                      TK từ 00 đến 99
                    </a>
                  </li>
                  <li>
                    <a
                      href="/lo-xien-xsmb.html"
                      title="Thống kê cặp loto cùng về XSMB"
                    >
                      Thống kê cặp loto cùng về XSMB
                    </a>
                  </li>
                  <li>
                    <a href="/lo-kep-xsmb.html" title="Thống kê loto kép">
                      Thống kê loto kép
                    </a>
                  </li>
                  <li>
                    <a
                      href="/thong-ke-tan-suat-loto.html"
                      title="Thống kê tần suất loto "
                    >
                      Thống kê tần suất loto{" "}
                    </a>
                  </li>
                  <li>
                    <a
                      href="/thong-ke-tan-suat-cap-loto.html"
                      title="Thống kê tần suất cặp loto"
                    >
                      Thống kê tần suất cặp loto
                    </a>
                  </li>
                  <li>
                    <a
                      href="/thong-ke-giai-dac-biet-ngay-mai.html"
                      title="Thống kê giải đặc biệt ngày mai"
                    >
                      Thống kê giải đặc biệt ngày mai
                    </a>
                  </li>
                </ul>
              </li>
              <li className="menu_li">
                <a
                  href="/xo-so-hom-nay.html"
                  className="menu_a"
                  title="Tra cứu KQ"
                >
                  Tra cứu KQ
                </a>
                <ul className="menu_down">
                  <li>
                    <a href="/so-ket-qua.html" title="Sổ kết quả">
                      Sổ kết quả
                    </a>
                  </li>
                  <li>
                    <a href="/xo-so-hom-nay.html" title="Kết quả hôm nay">
                      Kết quả hôm nay
                    </a>
                  </li>
                  <li>
                    <a href="/xo-so-hom-qua.html" title="Kết quả hôm qua">
                      Kết quả hôm qua
                    </a>
                  </li>
                  <li>
                    <a href="/xsmb-30-ngay.html" title="XSMB 30 ngày">
                      XSMB 30 ngày
                    </a>
                  </li>
                  <li>
                    <a href="/do-so.html" title="Dò vé số">
                      Dò vé số
                    </a>
                  </li>
                  <li>
                    <a href="/xo-so-theo-dai.html" title="Kết quả đài">
                      Kết quả đài
                    </a>
                  </li>
                </ul>
              </li>
              <li className="menu_li">
                <a
                  href="/so-dau-duoi-mb.html"
                  className="menu_a"
                  title="Sổ đầu đuôi"
                >
                  Sổ đầu đuôi
                </a>
                <ul className="menu_down">
                  <li>
                    <a href="/so-dau-duoi-mb.html" title="Sổ đầu đuôi miền Bắc">
                      Sổ đầu đuôi miền Bắc
                    </a>
                  </li>
                  <li>
                    <a href="/so-dau-duoi-mn.html" title="Sổ đầu đuôi miền Nam">
                      Sổ đầu đuôi miền Nam
                    </a>
                  </li>
                  <li>
                    <a
                      href="/so-dau-duoi-mt.html"
                      title="Sổ đầu đuôi miền Trung"
                    >
                      Sổ đầu đuôi miền Trung
                    </a>
                  </li>
                </ul>
              </li>
              <li className="menu_li">
                <a
                  href="/tin-xo-so-c404-p1.html"
                  className="menu_a"
                  title="Tin Xổ số"
                >
                  Tin Xổ số
                </a>
                <ul className="menu_down">
                  <li>
                    <a
                      href="/tin-xo-so/mau-ve-trung-thuong-xo-so-kien-thiet-moi-nhat-404-144036.html"
                      title="Mẫu vé trúng thưởng"
                    >
                      Mẫu vé trúng thưởng
                    </a>
                  </li>
                  <li>
                    <a
                      href="/quy-dinh-xo-so-c418-p1.html"
                      title="Quy định xổ số"
                    >
                      Quy định xổ số
                    </a>
                  </li>
                  <li>
                    <a
                      href="/tin-trung-thuong-c417-p1.html"
                      title="Tin trúng thưởng"
                    >
                      Tin trúng thưởng
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
}
