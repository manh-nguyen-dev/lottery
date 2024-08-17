import React from "react";
import "../styles/footer.css";

export default function Calendar() {
  return (
    <>
      <div class="widget-container fc-calendar-container" id="calendar">
        <div class="fc-calendar fc-five-rows">
          <ul class="caleandar-weks">
            <li>Hai</li>
            <li>Ba</li>
            <li>Tư</li>
            <li>Năm</li>
            <li>Sáu</li>
            <li class="red">Bảy</li>
            <li>C.N</li>
          </ul>
          <ul class="caleandar-days">
            <li class="disabled-ca"></li>
            <li class="disabled-ca"></li>
            <li>
              <span class="ca-pm">
                <span class="fc-date">1</span>
                <i class="icon-hacdao" title="Ngày hắc đạo"></i>
              </span>
              <span class="ca-am" title="27/3/2019">
                27/3
              </span>
            </li>
            <li>
              <span class="ca-pm">
                <span class="fc-date">2</span>
                <i class="icon-hoangdao" title="Ngày hoàng đạo"></i>
              </span>
              <span class="ca-am" title="28/3/2019">
                28
              </span>
            </li>
            <li>
              <span class="ca-pm">
                <span class="fc-date">3</span>
                <i class="icon-hacdao" title="Ngày hắc đạo"></i>
              </span>
              <span class="ca-am" title="29/3/2019">
                29
              </span>
            </li>
            <li>
              <span class="ca-pm">
                <span class="fc-date">4</span>
                <i class="icon-hacdao" title="Ngày hắc đạo"></i>
              </span>
              <span class="ca-am" title="30/3/2019">
                30
              </span>
            </li>
            <li>
              <span class="ca-pm" style="color:#c80505;">
                <span class="fc-date">5</span>
                <i class="icon-hacdao" title="Ngày hắc đạo"></i>
              </span>
              <span class="ca-am" title="1/4/2019">
                1/4
              </span>
            </li>
            <li>
              <span class="ca-pm">
                <span class="fc-date">6</span>
                <i class="icon-hacdao" title="Ngày hắc đạo"></i>
              </span>
              <span class="ca-am" title="2/4/2019">
                2
              </span>
            </li>
            <li>
              <span class="ca-pm">
                <span class="fc-date">7</span>
                <i class="icon-hoangdao" title="Ngày hoàng đạo"></i>
              </span>
              <span class="ca-am" title="3/4/2019">
                3
              </span>
            </li>
            <li>
              <span class="ca-pm">
                <span class="fc-date">8</span>
                <i class="icon-hacdao" title="Ngày hắc đạo"></i>
              </span>
              <span class="ca-am" title="4/4/2019">
                4
              </span>
            </li>
            <li>
              <span class="ca-pm">
                <span class="fc-date">9</span>
                <i class="icon-hoangdao" title="Ngày hoàng đạo"></i>
              </span>
              <span class="ca-am" title="5/4/2019">
                5
              </span>
            </li>
            <li>
              <span class="ca-pm">
                <span class="fc-date">10</span>
                <i class="icon-hoangdao" title="Ngày hoàng đạo"></i>
              </span>
              <span class="ca-am" title="6/4/2019">
                6
              </span>
            </li>
            <li>
              <span class="ca-pm">
                <span class="fc-date">11</span>
                <i class="icon-hacdao" title="Ngày hắc đạo"></i>
              </span>
              <span class="ca-am" title="7/4/2019">
                7
              </span>
            </li>
            <li>
              <span class="ca-pm" style="color:#c80505;">
                <span class="fc-date">12</span>
                <i class="icon-hacdao" title="Ngày hắc đạo"></i>
              </span>
              <span class="ca-am" title="8/4/2019">
                8
              </span>
            </li>
            <li>
              <span class="ca-pm">
                <span class="fc-date">13</span>
                <i class="icon-hoangdao" title="Ngày hoàng đạo"></i>
              </span>
              <span class="ca-am" title="9/4/2019">
                9
              </span>
            </li>
            <li>
              <span class="ca-pm">
                <span class="fc-date">14</span>
                <i class="icon-hoangdao" title="Ngày hoàng đạo"></i>
              </span>
              <span class="ca-am" title="10/4/2019">
                10
              </span>
            </li>
            <li>
              <span class="ca-pm">
                <span class="fc-date">15</span>
                <i class="icon-hacdao" title="Ngày hắc đạo"></i>
              </span>
              <span class="ca-am" title="11/4/2019">
                11
              </span>
            </li>
            <li class=" active ">
              <span class="ca-pm">
                <span class="fc-date">16</span>
                <i class="icon-hoangdao" title="Ngày hoàng đạo"></i>
              </span>
              <span class="ca-am" title="12/4/2019">
                12
              </span>
            </li>
            <li>
              <span class="ca-pm">
                <span class="fc-date">17</span>
                <i class="icon-hacdao" title="Ngày hắc đạo"></i>
              </span>
              <span class="ca-am" title="13/4/2019">
                13
              </span>
            </li>
            <li>
              <span class="ca-pm">
                <span class="fc-date">18</span>
                <i class="icon-hacdao" title="Ngày hắc đạo"></i>
              </span>
              <span class="ca-am" title="14/4/2019">
                14
              </span>
            </li>
            <li>
              <span class="ca-pm" style="color:#c80505;">
                <span class="fc-date">19</span>
                <i class="icon-hoangdao" title="Ngày hoàng đạo"></i>
              </span>
              <span class="ca-am" title="15/4/2019">
                15
              </span>
            </li>
            <li>
              <span class="ca-pm">
                <span class="fc-date">20</span>
                <i class="icon-hacdao" title="Ngày hắc đạo"></i>
              </span>
              <span class="ca-am" title="16/4/2019">
                16
              </span>
            </li>
            <li>
              <span class="ca-pm">
                <span class="fc-date">21</span>
                <i class="icon-hoangdao" title="Ngày hoàng đạo"></i>
              </span>
              <span class="ca-am" title="17/4/2019">
                17
              </span>
            </li>
            <li>
              <span class="ca-pm">
                <span class="fc-date">22</span>
                <i class="icon-hoangdao" title="Ngày hoàng đạo"></i>
              </span>
              <span class="ca-am" title="18/4/2019">
                18
              </span>
            </li>
            <li>
              <span class="ca-pm">
                <span class="fc-date">23</span>
                <i class="icon-hacdao" title="Ngày hắc đạo"></i>
              </span>
              <span class="ca-am" title="19/4/2019">
                19
              </span>
            </li>
            <li>
              <span class="ca-pm">
                <span class="fc-date">24</span>
                <i class="icon-hacdao" title="Ngày hắc đạo"></i>
              </span>
              <span class="ca-am" title="20/4/2019">
                20
              </span>
            </li>
            <li>
              <span class="ca-pm">
                <span class="fc-date">25</span>
                <i class="icon-hoangdao" title="Ngày hoàng đạo"></i>
              </span>
              <span class="ca-am" title="21/4/2019">
                21
              </span>
            </li>
            <li>
              <span class="ca-pm" style="color:#c80505;">
                <span class="fc-date">26</span>
                <i class="icon-hoangdao" title="Ngày hoàng đạo"></i>
              </span>
              <span class="ca-am" title="22/4/2019">
                22
              </span>
            </li>
            <li>
              <span class="ca-pm">
                <span class="fc-date">27</span>
                <i class="icon-hacdao" title="Ngày hắc đạo"></i>
              </span>
              <span class="ca-am" title="23/4/2019">
                23
              </span>
            </li>
            <li>
              <span class="ca-pm">
                <span class="fc-date">28</span>
                <i class="icon-hoangdao" title="Ngày hoàng đạo"></i>
              </span>
              <span class="ca-am" title="24/4/2019">
                24
              </span>
            </li>
            <li>
              <span class="ca-pm">
                <span class="fc-date">29</span>
                <i class="icon-hacdao" title="Ngày hắc đạo"></i>
              </span>
              <span class="ca-am" title="25/4/2019">
                25
              </span>
            </li>
            <li>
              <span class="ca-pm">
                <span class="fc-date">30</span>
                <i class="icon-hacdao" title="Ngày hắc đạo"></i>
              </span>
              <span class="ca-am" title="26/4/2019">
                26
              </span>
            </li>
            <li>
              <span class="ca-pm">
                <span class="fc-date">31</span>
                <i class="icon-hoangdao" title="Ngày hoàng đạo"></i>
              </span>
              <span class="ca-am" title="27/4/2019">
                27
              </span>
            </li>
            <li class="disabled-ca"></li>
            <li class="disabled-ca"></li>
          </ul>
        </div>
      </div>
    </>
  );
}
