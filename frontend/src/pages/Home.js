import React, { useEffect, useState } from "react";
import "../styleAll.css";
import styles from "../styleAll.css";
import Header from "../components/header.js";
import Footer from "../components/footer.js";
import StatisticList from "../components/statistic/list.js";
import PrizeTable from "../components/prizeTable.js";
import Calendar from "../components/calendar.js";
import RegionProvinceRandomSelect from "../components/regionProvinceRandomSelect.js";
import axios from "axios";
import { API_URL, SESSION_STATUS } from "../const/index.js";

export default function Home() {
  const [trying, setTrying] = useState(0);
  const [initData, setInitData] = useState(false);
  const [numbers, setNumbers] = useState([]);
  const [ws, setWs] = useState(null);

  const completeRandom = async () => {
    try {
      const { data } = await axios.put(
        `${API_URL}/sessions/${initData.sessionId}/status/completed`
      );
      setTimeout(() => {
        setTrying(2);
      }, 200);
      setInitData((pre) => ({ ...pre, status: SESSION_STATUS.COMPLETED }));

      console.log("complete random numbers", data);
    } catch {
      console.log("error fetch numbers");
    }
  };

  const connectSocket = () => {
    // Create a WebSocket connection
    const socket = new WebSocket(process.env.REACT_APP_WEBSOCKET_URL_USER);

    socket.onopen = () => {
      console.log("WebSocket connection established");
      socket.send("user");
    };
    socket.onmessage = (event) => {
      // Parse and handle incoming messages
      const data = JSON.parse(event.data);
      console.log("socket onmessage", data);

      if (data.numbers) {
        if (
          initData.sessionId != data.sessionId &&
          data.event !== "numbersListWhenUpdateANumber"
        ) {
          setNumbers([]);
        }
        setInitData(data);
        setTimeout(() => setNumbers(data.numbers), 100);
      }
    };

    return socket;
  };

  useEffect(() => {
    let timeout = null;
    const socket = connectSocket(); // Change the URL to your WebSocket server's URL

    socket.onclose = () => {
      console.log("WebSocket connection closed");
      setTimeout(function () {
        console.log("Reconnecting...");
        connectSocket();
      }, 5000); // Retry after 5 seconds
    };

    setWs(socket);

    // Cleanup on component unmount
    return () => {
      if (socket) {
        console.log("un mount");
        clearTimeout(timeout);
        initData.sessionId && completeRandom();
        socket.close();
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <meta charSet="UTF-8" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, maximum-scale=5"
      />
      <title>
        Quay thử XSMB hôm nay - Quay thử MB - Quay số lấy hên may mắn
      </title>
      <meta
        name="description"
        content="Quay thu XSMB lấy hên trước giờ tường thuật xổ số, Quay thử Xổ số Miền Bắc hôm nay trước khi mua vé xổ số kiến thiết MB, chúc bạn may mắn!"
      />
      <meta
        name="keywords"
        content="Quay thử XSMB,Quay thử MB,quay thử xổ số miền bắc hôm nay"
      />
      <link rel="canonical" href="https://xoso.com.vn#" />
      <meta name="COPYRIGHT" content="Copyright (C) 2007 xoso.com.vn" />
      <meta name="RATING" content="GENERAL" />
      <meta name="revisit-after" content="1 days" />
      <meta
        name="DC.title"
        content="Quay thử XSMB hôm nay - Quay thử MB - Quay số lấy hên may mắn"
      />
      <meta name="geo.region" content="VN-HN" />
      <meta name="geo.placename" content="ha noi" />
      <meta name="geo.position" content="21.0312486,105.7823703" />
      <meta name="ICBM" content="21.0312486,105.7823703" />
      <meta property="twitter:account_id" content={874534666891534336} />
      <meta
        property="twitter:title"
        content="Quay thử XSMB hôm nay - Quay thử MB - Quay số lấy hên may mắn"
      />
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="fb:admins" content={100000342160123} />
      <meta property="fb:page_id" content={1928896377349928} />
      <meta property="fb:app_id" content={1928896377349928} />
      <meta
        name="google-site-verification"
        content="0LUg5J6LnCz9snCGRUPSlgephhL9otOtlhr2Ry1Fq8o"
      />
      <meta name="y_key" content="" />
      <meta name="msvalidate.01" content="620A159A1964104173AA8028E443F628" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta name="robots" content="index,follow,noydir,noodp" />
      <meta name="format-detection" content="telephone=no" />
      <meta name="author" content="xoso.com.vn" />
      <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
      <link rel="manifest" href="" />
      <link rel="dns-prefetch" href="https://cdn.xoso.com.vn" />
      <link rel="dns-prefetch" href="https://pagead2.googlesyndication.com" />
      <link rel="dns-prefetch" href="https://www.googletagservices.com/" />
      <link rel="dns-prefetch" href="https://fonts.gstatic.com" />
      <link rel="dns-prefetch" href="https://www.google-analytics.com" />
      <link rel="dns-prefetch" href="https://www.googleadservices.com" />
      <link rel="dns-prefetch" href="https://googleads.g.doubleclick.net" />
      <link rel="dns-prefetch" href="https://ajax.googleapis.com" />
      <link rel="dns-prefetch" href="https://tpc.googlesyndication.com" />
      <link rel="dns-prefetch" href="https://securepubads.g.doubleclick.net" />
      <link rel="dns-prefetch" href="https://adservice.google.com" />
      <link rel="dns-prefetch" href="https://adservice.google.com.vn" />
      <link
        rel="stylesheet"
        href="https://cdn.xoso.com.vn/css/styleall.min.css?v=20230810"
      />

      <style
        dangerouslySetInnerHTML={{
          __html:
            "\n            .fc-today {\n                background-color: gold\n            }\n\n            @media only screen and (max-width: 960px) {\n                .aside-300 {\n                    display:block !important\n                }\n\n                .hidemobile {\n                    display: none\n                }\n            }\n\n            .nav-panel {\n                display: table;\n                width: 100%;\n                float: left\n            }\n\n            .nav-panel li {\n                display: table-cell;\n                text-align: center;\n                font-size: 14px;\n                border-left: solid 1px #dddfe2;\n                color: #222;\n                vertical-align: top\n            }\n\n            .nav-panel a.active {\n                color: #fff;\n                background: #ed1c25\n            }\n\n            .p-xs {\n                display: block\n            }\n\n            .m-xs {\n                display: none\n            }\n\n            .nav-panel li:first-child {\n                border-left: 0\n            }\n\n            .nav-panel a {\n                display: block;\n                padding: 8px 2px;\n                text-align: center\n            }\n\n            @media (max-width: 960px) {\n                .p-xs {\n                    display:none\n                }\n\n                .m-xs {\n                    display: block\n                }\n            }\n        ",
        }}
      />
      <Header />
      <main className={styles.main}>
        <div className="main-content">
          <div className="breadcrumb">
            <a title="Trang chủ" href="/">
              Trang chủ
            </a>
            <span>Quay thử xsmb</span>
          </div>
          <div className="content-left">
            <div
              id="curr_living_neo"
              style={{ display: "none" }}
              className="live-lottery"
            >
              <span className="live-title">
                Đang tường thuật Xổ số <span id="lottery_living_name" />
              </span>
              <a
                id="curr_living_btn"
                rel="nofollow"
                className="live-btn"
                title="➜ Xem ngay"
              >
                ➜ Xem ngay
              </a>
            </div>
            <div className="section">
              <div className="menu-item5">
                <a title="Quay thử" href="#">
                  Quay thử
                </a>
                <a className="active" title="Quay thử MB" href="#">
                  MB
                </a>
                <a title="Quay thử MT" href="#">
                  MT
                </a>
                <a title="Quay thử MN" href="#">
                  MN
                </a>
                <a title="Quay thử Vietlott" href="/quay-thu-vietlott.html">
                  Vietlott
                </a>
              </div>
            </div>
            <section className="section">
              <header className="section-header">
                <span className="category-title">Mở thưởng hôm nay</span>
              </header>
              <div className="section-content">
                <table className="lottery-today">
                  <tbody>
                    <tr>
                      <td>
                        <a title="XSMB" href="/xo-so-mien-bac/xsmb-p1.html">
                          XSMB
                        </a>
                      </td>
                      <td>
                        <a title="XSCT" href="/xo-so-can-tho/xsct-p1.html">
                          Cần Thơ
                        </a>
                      </td>
                      <td>
                        <a title="XSDNA" href="/xo-so-da-nang/xsdna-p1.html">
                          Đà Nẵng
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <a
                          title="Mega 6/45"
                          href="/xo-so-tu-chon-mega-645.html"
                        >
                          Mega 6/45
                        </a>
                      </td>
                      <td>
                        <a title="XSDN" href="/xo-so-dong-nai/xsdn-p1.html">
                          Đồng Nai
                        </a>
                      </td>
                      <td>
                        <a title="XSKH" href="/xo-so-khanh-hoa/xskh-p1.html">
                          Khánh Hòa
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <a
                          title="Điện toán 6x36"
                          href="/xo-so-dien-toan-6x36.html"
                        >
                          Điện toán 6x36
                        </a>
                      </td>
                      <td>
                        <a title="XSST" href="/xo-so-soc-trang/xsst-p1.html">
                          Sóc Trăng
                        </a>
                      </td>
                      <td></td>
                    </tr>
                    <tr>
                      <td>
                        <a title="XS Thần tài" href="/xo-so-than-tai.html">
                          XS Thần tài
                        </a>
                      </td>
                      <td></td>
                      <td></td>
                    </tr>
                    <tr>
                      <td>
                        <a
                          title="Điện toán 123"
                          href="/xo-so-dien-toan-123.html"
                        >
                          Điện toán 123
                        </a>
                      </td>
                      <td></td>
                      <td></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>
            <section className="section">
              <div className="section-header">
                <h1>
                  Quay thử XSMB hôm nay - Quay thử MB - Quay thử xổ số Miền Bắc
                </h1>
              </div>
              <div className="list-statistic">
                <p>
                  Kết quả quay thử xổ số miền Bắc hôm nay sẽ lấy ngẫu nhiên từ
                  kết quả xổ số truyền thống miền Bắc của bất kỳ một ngày đã
                  quay thưởng từ trong quá khứ, không được lập trình theo bất kỳ
                  một quy luật, mẫu hay xu hướng cụ thể nào. Tính năng quay thử
                  chỉ có tính chất giải trí vui vẻ sau những giờ làm việc căng
                  thẳng mệt mỏi. <strong className="red">KHUYẾN CÁO</strong>
                  người chơi không tham gia các trò chơi biến tướng từ xổ số, vi
                  phạm pháp luật Việt Nam.
                </p>
                <RegionProvinceRandomSelect
                  trying={trying}
                  setTrying={setTrying}
                  setNumbers={setNumbers}
                  initData={initData}
                  setInitData={setInitData}
                />
                <div id="quaythudate" />
              </div>
              <div id="quaythumb" className="section-content">
                <header className="section-header">
                  <h2>Quay thử XSMB - Quay thử MB</h2>
                  <div className="site-link">
                    <h3 className="site-link">
                      <a title="XSMB" href="/xo-so-mien-bac/xsmb-p1.html">
                        XSMB
                      </a>
                      <a title="XSMB Thứ 4" href="/xsmb-thu-4.html">
                        XSMB Thứ 4
                      </a>
                      <a title="XSMB " href="#">
                        XSMB
                      </a>
                    </h3>
                  </div>
                </header>
                <PrizeTable
                  numbers={numbers}
                  completeRandom={completeRandom}
                  initData={initData}
                />
                <div className="site-link2">
                  <h4>
                    <a title="Bảng Loto Miền Bắc" href="#"></a>
                  </h4>
                </div>
                <ul className="link-statistic">
                  <li>
                    Xem{" "}
                    <a
                      title="Xem tường thuật KQ XSMB hôm nay"
                      href="/tuong-thuat-mien-bac/xsmb-tructiep.html"
                    >
                      trực tiếp Xổ số miền Bắc
                    </a>
                  </li>
                  <li>
                    Xem kết quả{" "}
                    <a
                      title="Xem KQXSMB hôm nay"
                      href="/xo-so-mien-bac/xsmb-p1.html"
                    >
                      XSMB hôm nay
                    </a>
                  </li>
                  <li>
                    Thống kê{" "}
                    <a title="Lô gan MB hôm nay" href="/lo-gan-mien-bac.html">
                      Lô gan miền Bắc
                    </a>
                  </li>
                  <li>
                    <a
                      title="Thống kê giải ĐB miền Bắc"
                      href="/thong-ke-giai-dac-biet.html"
                    >
                      Thống kê Giải đặc biệt
                    </a>
                  </li>
                </ul>
              </div>
            </section>
            <section className="section">
              <header className="section-header2">
                <h2>
                  <a href="/phan-tich-kqxs-mien-bac-c411-p1.html">
                    Thống kê KQXS
                  </a>
                </h2>
              </header>
              <div className="section-content">
                <ul className="post-news">
                  <li>
                    <a
                      href="#"
                      title="Bình luận KQXSMB 7/8/2024 hôm nay có 17 xuất hiện 3 lần"
                      className="post-thumbnail thumb120"
                    >
                      <img
                        alt="Bình luận KQXSMB 7/8/2024 hôm nay có 17 xuất hiện 3 lần"
                        className="image lazy"
                        src="https://static.xoso.com.vn/medias/standard/2024/08/17/lokep-xsmb-180824-1708231159.jpg"
                        data-src="xoso.com.vn/medias/standard/2024/08/07/binhluan-xsmb-070824-0708184659.jpg"
                      />
                    </a>
                    <h3 className="description">
                      <a
                        href="/thong-ke-kqxs/binh-luan-kqxsmb-7-8-2024-407-146513.html"
                        title="Bình luận KQXSMB 7/8/2024 hôm nay có 17 xuất hiện 3 lần"
                      >
                        Bình luận KQXSMB 7/8/2024 hôm nay có 17 xuất hiện 3 lần
                      </a>
                    </h3>
                  </li>
                  <li>
                    <div className="post-title2">
                      <a
                        href="/thong-ke-xsmb/phan-tich-xsmb-7-8-thu-4-411-146499.html"
                        title="Phân tích XSMB 7/8 thứ 4 - Thống kê xổ số miền Bắc Thứ Tư 7/8"
                      >
                        Phân tích XSMB 7/8 thứ 4 - Thống kê xổ số miền Bắc Thứ
                        Tư 7/8
                      </a>
                    </div>
                  </li>
                  <li>
                    <div className="post-title2">
                      <a
                        href="/thong-ke-kqxs/loto-kep-xsmb-7-8-2024-407-146506.html"
                        title="Loto kép XSMB 7/8/2024 - Phân tích lô kép XSMB Thứ 4 hôm nay"
                      >
                        Loto kép XSMB 7/8/2024 - Phân tích lô kép XSMB Thứ 4 hôm
                        nay
                      </a>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="see-more">
                <a
                  href="/phan-tich-kqxs-mien-bac-c411-p1.html"
                  title="Xem thêm Thống kê Kết quả xổ số"
                >
                  Xem thêm
                </a>
              </div>
            </section>
            <section className="section">
              <div className="lottery-info">
                <h1>Quay thử xổ số miền Bắc hôm nay</h1>
                <p>
                  Quay thử xổ số <strong>miền Bắc </strong>
                  hôm nay, quay thử <strong>XSMB</strong>
                  được xoso.com.vn{" "}
                  <strong>
                    lấy ngẫu nhiên từ kết quả quay thưởng xổ số truyền thống đài
                    XSMB của một ngày bất kỳ đã mở thưởng trong quá khứ
                  </strong>
                  được lưu trữ trong suốt hơn chục năm qua, không theo bất kỳ
                  một quy luật hay xu hướng cụ thể nào. &nbsp;
                </p>
                <p>
                  Tính năng quay thử xổ số chỉ mang tính chất giải trí vui vẻ
                  sau những ngày làm việc mệt mỏi, chỉ mang tính chất tham khảo
                  và không có giá trị pháp lý. &nbsp;
                </p>
                <p>
                  <strong>Cách sử dụng:&nbsp;</strong>
                </p>
                <p>
                  <i>
                    <strong>- Bước 1</strong>
                  </i>
                  : Chọn đài xổ số <strong>miền Bắc &nbsp;</strong>
                </p>
                <p>
                  <i>
                    <strong>- Bước 2</strong>
                  </i>
                  : Nhấn nút Quay thử. Hệ thống sẽ tự động quay lần lượt các bộ
                  số ngẫu nhiên cho đài xổ số <strong>miền Bắc </strong>
                  bạn đã chọn. &nbsp;
                </p>
                <p>
                  <i>
                    <strong>- Bước 3</strong>
                  </i>
                  : Xem bảng Kết quả quay thử. Trên bảng kết quả quay thử có ghi
                  chú kết quả lấy tự động của một ngày cụ thể. Bạn có thể nhấn
                  vào ngày tháng để xem kết quả của ngày đó trong quá khứ.
                  &nbsp;
                </p>
                <p>
                  <strong>Lưu ý:&nbsp;</strong>
                </p>
                <p>
                  - Kết quả quay thử <strong>miền Bắc </strong>
                  không có giá trị pháp lý.&nbsp;
                </p>
                <p>
                  - Người chơi không nên sử dụng kết quả quay thử để tham gia
                  các trò chơi vi phạm pháp luật Việt Nam hay mua vé số.&nbsp;
                </p>
                <p>
                  Hãy luôn tuân thủ pháp luật Việt Nam khi tham gia các trò chơi
                  xổ số.&nbsp;
                </p>
                <p>
                  Tính năng Quay thử xổ số <strong>miền Bắc</strong> là một công
                  cụ giải trí thú vị. Hãy sử dụng tính năng này một cách vui vẻ
                  và trách nhiệm.&nbsp;
                </p>
                <p>
                  Chúng tôi hoàn toàn không chịu trách nhiệm về việc Quý vị sử
                  dụng thông tin này!&nbsp;
                </p>
                <p>
                  <i>
                    <strong>
                      Chúc các bạn MAY MẮN khi tham gia mua xổ số kiến thiết.
                      &nbsp;
                    </strong>
                  </i>
                </p>
                <p>
                  <strong>Xổ số kiến thiết - Ích nước lợi nhà!&nbsp;</strong>
                </p>
              </div>
            </section>
          </div>

          <StatisticList />
          <aside className="aside-300">
            <div className="widget">
              <div className="widget-title widget_bg">
                <h3>Kết quả theo ngày</h3>
              </div>
              <div className="form-select">
                <span className="btn-list1">
                  <img
                    id="custom-prev"
                    className="img-c"
                    src="https://cdn.xoso.com.vn/images/list8.svg"
                  />
                </span>
                <select className="select-item" id="custom-month">
                  <option value={1}>1</option>
                  <option value={2}>2</option>
                  <option value={3}>3</option>
                  <option value={4}>4</option>
                  <option value={5}>5</option>
                  <option value={6}>6</option>
                  <option value={7}>7</option>
                  <option value={8}>8</option>
                  <option value={9}>9</option>
                  <option value={10}>10</option>
                  <option value={11}>11</option>
                  <option value={12}>12</option>
                </select>
                <select className="select-item" id="custom-year">
                  <option value={2024}>2024</option>
                  <option value={2023}>2023</option>
                  <option value={2022}>2022</option>
                  <option value={2021}>2021</option>
                  <option value={2020}>2020</option>
                  <option value={2019}>2019</option>
                  <option value={2018}>2018</option>
                  <option value={2017}>2017</option>
                  <option value={2016}>2016</option>
                  <option value={2015}>2015</option>
                  <option value={2014}>2014</option>
                  <option value={2013}>2013</option>
                  <option value={2012}>2012</option>
                  <option value={2011}>2011</option>
                  <option value={2010}>2010</option>
                </select>
                <span
                  id="custom-current"
                  title="Hôm nay"
                  className="btn btn-select"
                >
                  Hôm nay
                </span>
                <span className="btn-list2">
                  <img
                    id="custom-next"
                    className="img-c"
                    src="https://cdn.xoso.com.vn/images/list7.svg"
                  />
                </span>
              </div>
              <div>
                <Calendar></Calendar>
              </div>
            </div>
            <div className="hidemobile">
              <div className="widget">
                <div className="widget-title widget_bg">
                  <h3>Dò kết quả</h3>
                </div>
                <div className="widget-container">
                  <div className="form-wg">
                    <div className="form-group">
                      <label className="label_gril">Bộ số:</label>
                      <div className="input_gril">
                        <input id="number_l4681z" />
                        <div className="text-danger">
                          Nhập bộ số để dò kết quả
                        </div>
                      </div>
                    </div>
                    <div className="form-group">
                      <label className="label_gril">Từ ngày:</label>
                      <div className="input_gril">
                        <input
                          id="dateRangeForm_g09f8w"
                          type="date"
                          min="2007-08-18"
                          max="2024-08-07"
                          data-date=""
                          data-date-format="DD MMMM YYYY"
                          defaultValue=""
                        />
                      </div>
                    </div>
                    <div className="form-group">
                      <label className="label_gril">Đến ngày:</label>
                      <div className="input_gril">
                        <input
                          id="dateRangeTo_k98pru"
                          type="date"
                          min="2007-08-18"
                          max="2024-08-07"
                          data-date=""
                          data-date-format="DD MMMM YYYY"
                          defaultValue=""
                        />
                      </div>
                    </div>
                    <div className="form-group">
                      <label className="label_gril">Tỉnh TP:</label>
                      <div className="input_gril">
                        <select id="province_w0c38u">
                          <option value={0}>Miền Bắc</option>
                          <option value={20}>An Giang</option>
                          <option value={17}>Bạc Liêu</option>
                          <option value={16}>Bến Tre</option>
                          <option value={24}>Bình Dương</option>
                          <option value={27}>Bình Phước</option>
                          <option value={22}>Bình Thuận</option>
                          <option value={15}>Cà Mau</option>
                          <option value={11}>Cần Thơ</option>
                          <option value={31}>Đà Lạt</option>
                          <option value={19}>Đồng Nai</option>
                          <option value={13}>Đồng Tháp</option>
                          <option value={28}>Hậu Giang</option>
                          <option value={29}>Kiên Giang</option>
                          <option value={26}>Long An</option>
                          <option value={18}>Sóc Trăng</option>
                          <option value={21}>Tây Ninh</option>
                          <option value={30}>Tiền Giang</option>
                          <option value={14}>TPHCM</option>
                          <option value={25}>Trà Vinh</option>
                          <option value={23}>Vĩnh Long</option>
                          <option value={10}>Vũng Tàu</option>
                          <option value={38}>Bình Định</option>
                          <option value={37}>Đà Nẵng</option>
                          <option value={34}>Đắk Lắk</option>
                          <option value={44}>Đắk Nông</option>
                          <option value={42}>Gia Lai</option>
                          <option value={32}>Huế</option>
                          <option value={36}>Khánh Hòa</option>
                          <option value={45}>Kon Tum</option>
                          <option value={41}>Ninh Thuận</option>
                          <option value={33}>Phú Yên</option>
                          <option value={39}>Quảng Bình</option>
                          <option value={35}>Quảng Nam</option>
                          <option value={43}>Quảng Ngãi</option>
                          <option value={40}>Quảng Trị</option>
                        </select>
                      </div>
                    </div>
                    <div className="form-group">
                      <div className="btn-right">
                        <button id="number_detector_24f606" className="btn">
                          Dò kết quả
                        </button>
                      </div>
                    </div>
                    <div className="form-group">
                      <p className="tutorial-loto">
                        Bạn có thể thống kê một hoặc nhiều số: <br />
                        Ví dụ: 36 hoặc 68, 86
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="ads">
              <div className="google-ads">
                <ins
                  className="adsbygoogle"
                  style={{
                    display: "block",
                    minWidth: 320,
                    maxWidth: 590,
                    width: "100%",
                    height: 280,
                  }}
                  data-ad-client="ca-pub-6162392498535478"
                  data-ad-slot={9567626652}
                />
              </div>
            </div>
          </aside>
        </div>
      </main>
      <aside data-pushbar-id="left" className="pushbar from_left pushbar-hide">
        <span data-pushbar-close="" className="btn-pushbar-close">
          <img
            alt="dong menu"
            className="icon-back lazy"
            src="data:image/gif;base64,R0lGODdhAQABAPAAAMPDwwAAACwAAAAAAQABAAACAkQBADs="
            data-src="https://cdn.xoso.com.vn/images/list2.png"
          />
        </span>
        <div className="user-sidebar">
          <a href="/">
            <img
              alt="trang chu xo so"
              className="logosidebar lazy"
              src="data:image/gif;base64,R0lGODdhAQABAPAAAMPDwwAAACwAAAAAAQABAAACAkQBADs="
              data-src="https://cdn.xoso.com.vn/images/logo.svg"
            />
          </a>
        </div>
        <div className="ac-menu">
          <div className="ac_item">
            <a href="/" className="ac_title_2">
              <img
                alt="trang chu xo so"
                className="ic-m lazy"
                src="data:image/gif;base64,R0lGODdhAQABAPAAAMPDwwAAACwAAAAAAQABAAACAkQBADs="
                data-src="https://cdn.xoso.com.vn/images/icon_home.svg"
              />
              Trang chủ
            </a>
          </div>
          <div className="ac_item boder_top">
            <a href="/xo-so-mien-bac/xsmb-p1.html" className="ac_title_2">
              <img
                alt="XSMB"
                className="ic-m lazy"
                src="data:image/gif;base64,R0lGODdhAQABAPAAAMPDwwAAACwAAAAAAQABAAACAkQBADs="
                data-src="https://cdn.xoso.com.vn/Content/images/icon_xsmb.svg"
              />
              XSMB
            </a>
            <span className="ac_icon" />
            <div className="ac_content">
              <div className="ac_ul2">
                <a href="/xsmb-thu-2.html" title="Thứ 2">
                  Thứ 2
                </a>
                <a href="/xsmb-thu-3.html" title="Thứ 3">
                  Thứ 3
                </a>
                <a href="/xsmb-thu-4.html" title="Thứ 4">
                  Thứ 4
                </a>
                <a href="/xsmb-thu-5.html" title="Thứ 5">
                  Thứ 5
                </a>
                <a href="/xsmb-thu-6.html" title="Thứ 6">
                  Thứ 6
                </a>
                <a href="/xsmb-thu-7.html" title="Thứ 7">
                  Thứ 7
                </a>
                <a href="/xsmb-chu-nhat-cn.html" title="Chủ nhật">
                  Chủ nhật
                </a>
                <a
                  href="/tuong-thuat-mien-bac/xsmb-tructiep.html"
                  title="Trực tiếp"
                >
                  Trực tiếp
                </a>
              </div>
            </div>
          </div>
          <div className="ac_item boder_top">
            <a href="/xo-so-mien-nam/xsmn-p1.html" className="ac_title_2">
              <img
                alt="XSMN"
                className="ic-m lazy"
                src="data:image/gif;base64,R0lGODdhAQABAPAAAMPDwwAAACwAAAAAAQABAAACAkQBADs="
                data-src="https://cdn.xoso.com.vn/Content/images/icon_xsmn.svg"
              />
              XSMN
            </a>
            <span className="ac_icon" />
            <div className="ac_content">
              <div className="ac_ul2">
                <a href="/xsmn-thu-2.html" title="Thứ 2">
                  Thứ 2
                </a>
                <a href="/xsmn-thu-3.html" title="Thứ 3">
                  Thứ 3
                </a>
                <a href="/xsmn-thu-4.html" title="Thứ 4">
                  Thứ 4
                </a>
                <a href="/xsmn-thu-5.html" title="Thứ 5">
                  Thứ 5
                </a>
                <a href="/xsmn-thu-6.html" title="Thứ 6">
                  Thứ 6
                </a>
                <a href="/xsmn-thu-7.html" title="Thứ 7">
                  Thứ 7
                </a>
                <a href="/xsmn-chu-nhat-cn.html" title="Chủ nhật">
                  Chủ nhật
                </a>
                <a
                  href="/tuong-thuat-mien-nam/xsmn-tructiep.html"
                  title="Trực tiếp"
                >
                  Trực tiếp
                </a>
              </div>
            </div>
          </div>
          <div className="ac_item boder_top">
            <a href="/xo-so-mien-trung/xsmt-p1.html" className="ac_title_2">
              <img
                alt="XSMT"
                className="ic-m lazy"
                src="data:image/gif;base64,R0lGODdhAQABAPAAAMPDwwAAACwAAAAAAQABAAACAkQBADs="
                data-src="https://cdn.xoso.com.vn/Content/images/icon_xsmt.svg"
              />
              XSMT
            </a>
            <span className="ac_icon" />
            <div className="ac_content">
              <div className="ac_ul2">
                <a href="/xsmt-thu-2.html" title="Thứ 2">
                  Thứ 2
                </a>
                <a href="/xsmt-thu-3.html" title="Thứ 3">
                  Thứ 3
                </a>
                <a href="/xsmt-thu-4.html" title="Thứ 4">
                  Thứ 4
                </a>
                <a href="/xsmt-thu-5.html" title="Thứ 5">
                  Thứ 5
                </a>
                <a href="/xsmt-thu-6.html" title="Thứ 6">
                  Thứ 6
                </a>
                <a href="/xsmt-thu-7.html" title="Thứ 7">
                  Thứ 7
                </a>
                <a href="/xsmt-chu-nhat-cn.html" title="Chủ nhật">
                  Chủ nhật
                </a>
                <a
                  href="/tuong-thuat-mien-trung/xsmt-tructiep.html"
                  title="Trực tiếp"
                >
                  Trực tiếp
                </a>
              </div>
            </div>
          </div>
          <div className="ac_item boder_top">
            <a
              href="/kqxs-vietlott-ket-qua-xo-so-vietlott.html"
              className="ac_title_2"
            >
              <img
                alt="Vietlott"
                className="ic-m lazy"
                src="data:image/gif;base64,R0lGODdhAQABAPAAAMPDwwAAACwAAAAAAQABAAACAkQBADs="
                data-src="https://cdn.xoso.com.vn/Content/images/icon_vietlott.svg"
              />
              Vietlott
            </a>
            <span className="ac_icon" />
            <div className="ac_content">
              <div className="ac_ul2">
                <a href="/xo-so-tu-chon-mega-645.html" title="Mega 6/45">
                  Mega 6/45
                </a>
                <a href="/xo-so-power-655.html" title="Power 6/55">
                  Power 6/55
                </a>
                <a href="/xo-so-max-3d.html" title="Max 3D">
                  Max 3D
                </a>
                <a href="/ket-qua-xs-keno.html" title="Xổ số Keno">
                  Xổ số Keno
                </a>
              </div>
            </div>
          </div>
          <div className="ac_item boder_top">
            <a href="/phan-tich-kqxs-c407-p1.html" className="ac_title_2">
              <img
                alt="Phân tích"
                className="ic-m lazy"
                src="data:image/gif;base64,R0lGODdhAQABAPAAAMPDwwAAACwAAAAAAQABAAACAkQBADs="
                data-src="https://cdn.xoso.com.vn/Content/images/icon_phantich.svg"
              />
              Phân tích
            </a>
            <span className="ac_icon" />
            <div className="ac_content">
              <div className="ac_ul2">
                <a
                  href="/phan-tich-kqxs-mien-bac-c411-p1.html"
                  title="Thống kê XSMB"
                >
                  Thống kê XSMB
                </a>
                <a
                  href="/phan-tich-kqxs-mien-trung-c413-p1.html"
                  title="Thống kê XSMT"
                >
                  Thống kê XSMT
                </a>
                <a
                  href="/phan-tich-kqxs-mien-nam-c412-p1.html"
                  title="Thống kê XSMN"
                >
                  Thống kê XSMN
                </a>
                <a
                  href="/tin-tuc-xs-mega-645.html"
                  title="Thống kê XS Vietlott"
                >
                  Thống kê XS Vietlott
                </a>
              </div>
            </div>
          </div>
          <div className="ac_item boder_top">
            <a href="/cau-mien-bac/cau-bach-thu.html" className="ac_title_2">
              <img
                alt="Thống kê vị trí"
                className="ic-m lazy"
                src="data:image/gif;base64,R0lGODdhAQABAPAAAMPDwwAAACwAAAAAAQABAAACAkQBADs="
                data-src="https://cdn.xoso.com.vn/Content/images/icon_tkcau.svg"
              />
              Thống kê vị trí
            </a>
            <span className="ac_icon" />
            <div className="ac_content">
              <div className="ac_ul2">
                <a
                  href="/cau-mien-bac/cau-bach-thu.html"
                  title="Thống kê duy nhất XSMB "
                >
                  Thống kê duy nhất XSMB{" "}
                </a>
                <a
                  href="/cau-mien-bac/cau-lat-lien-tuc.html"
                  title="Thống kê vị trí lật liên tục (XSMB)"
                >
                  Thống kê vị trí lật liên tục (XSMB)
                </a>
                <a
                  href="/cau-mien-bac/cau-ve-nhieu-nhay.html"
                  title="Thống kê vị trí về nhiều lần (XSMB)"
                >
                  Thống kê vị trí về nhiều lần (XSMB)
                </a>
                <a href="/cau-mien-trung.html" title="Thống kê vị trí XSMT">
                  Thống kê vị trí XSMT
                </a>
                <a href="/cau-mien-nam.html" title="Thống kê vị trí XSMN ">
                  Thống kê vị trí XSMN{" "}
                </a>
              </div>
            </div>
          </div>
          <div className="ac_item boder_top">
            <a href="/thong-ke-lo-gan.html" className="ac_title_2">
              <img
                alt="Thống kê"
                className="ic-m lazy"
                src="data:image/gif;base64,R0lGODdhAQABAPAAAMPDwwAAACwAAAAAAQABAAACAkQBADs="
                data-src="https://cdn.xoso.com.vn/Content/images/icon_thongke.svg"
              />
              Thống kê
            </a>
            <span className="ac_icon" />
            <div className="ac_content">
              <div className="ac_ul2">
                <a href="/thong-ke-lo-gan.html" title="Thống kê Lô gan">
                  Thống kê Lô gan
                </a>
                <a href="/thong-ke-giai-dac-biet.html" title="TK giải Đặc biệt">
                  TK giải Đặc biệt
                </a>
                <a href="/thong-ke-tong-hop.html" title="Thống kê tổng hợp">
                  Thống kê tổng hợp
                </a>
                <a href="/thong-ke-dau-duoi.html" title="Thống kê Đầu - Đuôi">
                  Thống kê Đầu - Đuôi
                </a>
                <a href="/thong-ke-tan-suat.html" title="Tần suất xuất hiện">
                  Tần suất xuất hiện
                </a>
                <a href="/thong-ke-00-99.html" title="TK từ 00 đến 99">
                  TK từ 00 đến 99
                </a>
                <a
                  href="/lo-xien-xsmb.html"
                  title="Thống kê cặp loto cùng về XSMB"
                >
                  Thống kê cặp loto cùng về XSMB
                </a>
                <a href="/lo-kep-xsmb.html" title="Thống kê loto kép">
                  Thống kê loto kép
                </a>
                <a
                  href="/thong-ke-tan-suat-loto.html"
                  title="Thống kê tần suất loto "
                >
                  Thống kê tần suất loto{" "}
                </a>
                <a
                  href="/thong-ke-tan-suat-cap-loto.html"
                  title="Thống kê tần suất cặp loto"
                >
                  Thống kê tần suất cặp loto
                </a>
                <a
                  href="/thong-ke-giai-dac-biet-ngay-mai.html"
                  title="Thống kê giải đặc biệt ngày mai"
                >
                  Thống kê giải đặc biệt ngày mai
                </a>
              </div>
            </div>
          </div>
          <div className="ac_item boder_top">
            <a href="/xo-so-hom-nay.html" className="ac_title_2">
              <img
                alt="Tra cứu KQ"
                className="ic-m lazy"
                src="data:image/gif;base64,R0lGODdhAQABAPAAAMPDwwAAACwAAAAAAQABAAACAkQBADs="
                data-src="https://cdn.xoso.com.vn/Content/images/icon_tracuu.svg"
              />
              Tra cứu KQ
            </a>
            <span className="ac_icon" />
            <div className="ac_content">
              <div className="ac_ul2">
                <a href="/so-ket-qua.html" title="Sổ kết quả">
                  Sổ kết quả
                </a>
                <a href="/xo-so-hom-nay.html" title="Kết quả hôm nay">
                  Kết quả hôm nay
                </a>
                <a href="/xo-so-hom-qua.html" title="Kết quả hôm qua">
                  Kết quả hôm qua
                </a>
                <a href="/xsmb-30-ngay.html" title="XSMB 30 ngày">
                  XSMB 30 ngày
                </a>
                <a href="/do-so.html" title="Dò vé số">
                  Dò vé số
                </a>
                <a href="/xo-so-theo-dai.html" title="Kết quả đài">
                  Kết quả đài
                </a>
              </div>
            </div>
          </div>
          <div className="ac_item boder_top">
            <a href="/so-dau-duoi-mb.html" className="ac_title_2">
              <img
                alt="Sổ đầu đuôi"
                className="ic-m lazy"
                src="data:image/gif;base64,R0lGODdhAQABAPAAAMPDwwAAACwAAAAAAQABAAACAkQBADs="
                data-src="https://cdn.xoso.com.vn/Content/images/icon_thamkhao.svg"
              />
              Sổ đầu đuôi
            </a>
            <span className="ac_icon" />
            <div className="ac_content">
              <div className="ac_ul2">
                <a href="/so-dau-duoi-mb.html" title="Sổ đầu đuôi miền Bắc">
                  Sổ đầu đuôi miền Bắc
                </a>
                <a href="/so-dau-duoi-mn.html" title="Sổ đầu đuôi miền Nam">
                  Sổ đầu đuôi miền Nam
                </a>
                <a href="/so-dau-duoi-mt.html" title="Sổ đầu đuôi miền Trung">
                  Sổ đầu đuôi miền Trung
                </a>
              </div>
            </div>
          </div>
          <div className="ac_item boder_top">
            <a href="/tin-xo-so-c404-p1.html" className="ac_title_2">
              <img
                alt="Tin Xổ số"
                className="ic-m lazy"
                src="data:image/gif;base64,R0lGODdhAQABAPAAAMPDwwAAACwAAAAAAQABAAACAkQBADs="
                data-src="https://cdn.xoso.com.vn/Content/images/icon_phantich.svg"
              />
              Tin Xổ số
            </a>
            <span className="ac_icon" />
            <div className="ac_content">
              <div className="ac_ul2">
                <a
                  href="/tin-xo-so/mau-ve-trung-thuong-xo-so-kien-thiet-moi-nhat-404-144036.html"
                  title="Mẫu vé trúng thưởng"
                >
                  Mẫu vé trúng thưởng
                </a>
                <a href="/quy-dinh-xo-so-c418-p1.html" title="Quy định xổ số">
                  Quy định xổ số
                </a>
                <a
                  href="/tin-trung-thuong-c417-p1.html"
                  title="Tin trúng thưởng"
                >
                  Tin trúng thưởng
                </a>
              </div>
            </div>
          </div>
        </div>
      </aside>
      <Footer />
      <a href="#" className="backtotop">
        <img
          alt="len dau"
          className="top-arrow"
          src="https://cdn.xoso.com.vn/images/top-arrow.svg"
        />
      </a>
      <div className="advstickyleft" id="advLeftId" />
      <div className="advstickyright" id="advRightId" />
      <div id="bottomMobileAdvs" className="advfixfooter">
        <div className="advfixfooterClose">X</div>
      </div>
      <div id="bottomRightAdvs" className="advrightfooter" />
    </>
  );
}
