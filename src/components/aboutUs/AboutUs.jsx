// eslint-disable-next-line no-unused-vars
import React, { useEffect, useRef } from "react";
import "./AboutUs.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faArrowRight} from '@fortawesome/free-solid-svg-icons'
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

function AboutUs() {
  
  // const tl = gsap.timeline({defaults: {ease: "power4.inOut", duration: 2}});

  // tl.to('.upper', {'clip-path': 'polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)', opacity: 1, y: 0, duration: 2.2})

  const aRef_1 = useRef(null);
  useEffect(() => {
    const z = aRef_1.current;
    gsap.fromTo(z, {opacity: 0, x: -100}, {opacity: 1, x: 0, ease: "power4.inOut", duration: 2, delay: 0.75, scrollTrigger: {
      trigger: z
    }})
  }, []);

  const aRef_2 = useRef(null);
  useEffect(() => {
    const x = aRef_2.current;
    gsap.fromTo(x, {opacity: 0, x: 100}, {opacity: 1, x: 0, ease: "power4.inOut", duration: 2, delay: 0.8, scrollTrigger: {
      trigger: x
    }})
  }, []);

  const aRef_3 = useRef(null);
  useEffect(() => {
    const c = aRef_3.current;
    gsap.fromTo(c, {opacity: 0, y: 100}, {opacity: 1, y: 0, ease: "power4.inOut", duration: 2, delay: 1, scrollTrigger: {
      trigger: c
    }})
  }, []);

  const aRef_4 = useRef(null);
  useEffect(() => {
    const v = aRef_4.current;
    gsap.fromTo(v, {opacity: 0, y: 100}, {opacity: 1, y: 0, ease: "power4.inOut", duration: 2, delay: 1.2, scrollTrigger: {
      trigger: v
    }})
  }, []);

  const aRef_5 = useRef(null);
  useEffect(() => {
    const b = aRef_5.current;
    gsap.fromTo(b, {opacity: 0, y: 100}, {opacity: 1, y: 0, ease: "power4.inOut", duration: 2, delay: 1.4, scrollTrigger: {
      trigger: b
    }})
  }, []);

  const aRef_6 = useRef(null);
  useEffect(() => {
    const n = aRef_6.current;
    gsap.fromTo(n, {opacity: 0, y: 100}, {opacity: 1, y: 0, ease: "power4.inOut", duration: 2, delay: 1.6, scrollTrigger: {
      trigger: n
    }})
  }, []);

  return (
    <main className="scroll-smooth" id="vechungtoi">
      <div className="upper" >
        <div className="left" ref={aRef_1}>
          <h1>Về Chúng Tôi.</h1>
          <p>
            <span>Minh Long Phat </span>
            là đơn vị hàng đầu trong việc cung cấp giải pháp đóng gói cho ngành
            công nghiệp xuất khẩu.
            <br /> Chúng tôi hiểu rằng việc đóng gói đúng cách không chỉ đảm bảo
            an toàn cho hàng hóa mà còn đáp ứng các yêu cầu về tiêu chuẩn và
            thông số kỹ thuật.
            <br />
            <h2> Các sản phẩm và dịch vụ của chúng tôi bao gồm:</h2>
          </p>
        </div>
        <div className="right" ref={aRef_2}>
          <img
            src="https://sancopack.com/wp-content/uploads/2022/10/may-dong-pallet-tu-dong2028129.png"
            alt=""
          />
        </div>
      </div>
      <div className="lower">
        <div className="left">
          <div className="item_1 mr-5" ref={aRef_3}>
            <div className="top">
              <div className="title">
                <div className="left">
                  <h1>Màng Co & 
                    <br/>Dây Đai</h1>
                </div>
                <div className="right">
                  <button
                      className="btn"
                      onClick={(event) => {
                        event.preventDefault;
                        const element = document.getElementById("daydai");
                        element.scrollIntoView({
                          ScrollBehavior: "smooth",
                        });
                      }}
                    >
                      <p className="mr-2">Xem sản phẩm</p>
                      <FontAwesomeIcon icon={faArrowRight} />
                    </button>
                </div>
              </div>
            </div>
            <div className="bottom mt-3">
              <p className="mb-3">
              Chúng tôi cung cấp màng co và dây đai chất lượng, giúp bảo vệ hàng hóa khỏi bụi bẩn, ẩm ướt và va đập.
              </p>
              <p>
              Sản phẩm của chúng tôi đáp ứng các yêu cầu về độ bền và độ co giãn.
              </p>
            </div>
          </div>
          <div className="item_1 mr-5" ref={aRef_4}>
            <div className="top">
              <div className="title">
                <div className="left scroll-smooth">
                    <h1>Pallet Gỗ</h1>
                </div>
                <div className="right">
                  <button
                      className="btn"
                      onClick={(event) => {
                        event.preventDefault;
                        const element = document.getElementById("pallet");
                        element.scrollIntoView({
                          scrollBehavior: "smooth",
                        });
                      }}
                    >
                      <p className="mr-2">Xem sản phẩm</p>
                      <FontAwesomeIcon icon={faArrowRight} />
                    </button>
                </div>
              </div>
            </div>
            <div className="bottom mt-3">
              <p className="mb-3">
                Chúng tôi cung cấp các loại pallet gỗ chất lượng cao, đảm bảo an
                toàn cho hàng hóa trong quá trình vận chuyển và lưu kho.
              </p>
              <p>
                Pallet gỗ của chúng tôi tuân thủ các tiêu chuẩn quốc tế và có
                thông số kỹ thuật phù hợp.{" "}
              </p>
            </div>
          </div>
        </div>
        <div className="right" ref={aRef_5}>
          <div className="head">
            <h1>Giải pháp đóng gói tùy chỉnh:</h1>
          </div>
          <div className="middle mt-3">
            <p>
              Chúng tôi luôn lắng nghe và hiểu rõ yêu cầu của khách hàng.
            </p>
            <p className="mt-3">
              Dựa trên yêu cầu, thông số kỹ thuật và tiêu chuẩn của khách hàng, chúng tôi tư vấn và thiết kế giải pháp đóng gói phù hợp nhất cho từng loại hàng hóa với chất lượng đảm bảo và giá cả cạnh tranh tối ưu.
            </p>
            <p className="mt-3">
              Với sự chuyên nghiệp, cam kết về chất lượng và đội ngũ nhân viên giàu kinh nghiệm, Minh Long Phat tự hào là đối tác tin cậy của các doanh nghiệp xuất khẩu tại Việt Nam.
            </p>
          </div>
        </div>
      </div>
      <div className="sign text-center" ref={aRef_6}>
        <h3 className="italic">MINH LONG PHÁT - Kinh Doanh từ Tâm!</h3>
      </div>
    </main>
  );
}

export default AboutUs;
