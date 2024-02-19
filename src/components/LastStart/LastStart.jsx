import "../LastStart/LastStart.css";
import img1 from "../LastStart/img/img1.png";
import img2 from "../LastStart/img/img2.png";
function LastStart() {
  return (
    <div className="ko-LastStart">
      <div className="container">
        <div className="ko-lastStart-main position-relative">
          <div className="ko-page-img1 position-absolute">
            <img src={img1} alt="" className="ko-img1" />
          </div>
          <div className="ko-page-img2 position-absolute">
            <img src={img2} alt="" className="ko-img2" />
          </div>
          <div className="ko-lefte-contante">
            <div className="ko-img">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="62"
                height="73"
                viewBox="0 0 62 73"
                fill="none"
              >
                <path
                  d="M47.6841 44.9125C47.6639 44.9042 47.6435 44.8967 47.623 44.8897C45.6387 44.1527 44.0578 43.9132 43.8536 43.866C43.7158 43.4202 43.4842 42.9979 43.158 42.6317C41.5814 40.8628 39.6904 39.8889 38.6672 39.454V38.1639C40.9021 36.5577 42.4688 34.4506 43.1251 31.2499H44.3773C46.3255 31.2499 47.9107 29.6649 47.9107 27.7167V25.5872C47.9107 24.0055 46.8658 22.6631 45.4277 22.2141V19.1265C45.8549 18.8378 46.1493 18.3844 46.2358 17.8754L47.0081 13.3339L51.7077 11.5499V13.0906C50.8459 13.2159 50.1562 13.9045 50.053 14.7927L49.4965 19.5906C49.363 20.7437 50.2639 21.7641 51.4326 21.7641H54.0918C55.2528 21.7641 56.1627 20.7514 56.028 19.5903L55.4715 14.7927C55.3684 13.9047 54.6787 13.2159 53.8168 13.0906V9.781C53.8168 9.77973 53.8169 9.77861 53.8169 9.77734C53.8168 9.18714 53.4602 8.67048 52.9085 8.46123L47.1378 6.27071C46.5929 6.06371 45.9841 6.33793 45.7774 6.88243C45.5707 7.42707 45.8446 8.03612 46.3891 8.24284L50.4329 9.77776L46.169 11.3964C46.0141 11.2976 45.8429 11.2192 45.657 11.1676C35.8808 8.45645 26.3763 8.45673 16.6009 11.1676C16.415 11.219 16.2437 11.2976 16.0888 11.3964L11.8249 9.77776L28.7855 3.33953C30.2964 2.76578 31.9613 2.76564 33.4727 3.33953L41.7735 6.49051C42.3184 6.69765 42.9271 6.42329 43.1339 5.87879C43.3406 5.33415 43.0667 4.72511 42.5222 4.51839L34.2214 1.36754C32.227 0.610559 30.0309 0.610559 28.0368 1.36754L9.34975 8.46109C8.7978 8.67048 8.44117 9.18714 8.44117 9.77734C8.44103 10.3675 8.79752 10.8845 9.34961 11.0942L15.2501 13.3339L16.0225 17.8752C16.109 18.3843 16.4035 18.8378 16.8307 19.1264V22.2132C15.3937 22.6615 14.3477 24.0045 14.3477 25.5871V27.7166C14.3477 29.6647 15.9327 31.2498 17.881 31.2498H19.1336C19.736 34.27 21.1776 36.3504 23.3332 37.9736V39.454C22.3099 39.8888 20.4189 40.8629 18.8426 42.6317C18.5164 42.9977 18.2848 43.42 18.147 43.8658C18.0965 43.8775 16.0121 44.2192 14.3161 44.9125C6.08795 47.9977 0.419922 55.933 0.419922 64.959V67.4188C0.419922 70.3859 2.83389 72.7998 5.80094 72.7998H56.1995C59.1666 72.7998 61.5805 70.3859 61.5805 67.4188V64.959C61.5805 55.9327 55.9124 47.9974 47.6841 44.9125ZM53.3928 15.1778L53.912 19.6548H51.6126L52.1318 15.1778H53.3928ZM39.1807 42.08C39.9379 42.5314 40.8126 43.1709 41.583 44.0351C41.9542 44.4519 41.9932 45.0623 41.6936 45.5125C41.6934 45.5131 41.6931 45.5137 41.6927 45.5142C41.69 45.5182 41.6875 45.5221 41.6849 45.5262L37.5313 51.7283C37.5311 51.7286 37.5309 51.7289 37.5307 51.7292C37.1731 52.2631 36.466 52.4144 35.9215 52.074C34.9169 51.4462 33.3781 50.4848 32.7638 50.101L37.5448 45.8711C38.6415 44.9005 39.221 43.4971 39.1807 42.08ZM35.8518 54.2911C35.5061 54.8326 35.004 55.6195 34.2747 56.7625L33.5969 54.8041L34.4478 53.6402C34.6784 53.7668 35.0995 54.1258 35.8518 54.2911ZM36.8898 41.2326C37.3045 42.3021 37.006 43.5313 36.147 44.2912L31.0002 48.8447L25.8536 44.2912C24.9946 43.5313 24.696 42.3022 25.1109 41.2328C25.2679 40.7452 25.4426 40.5322 25.4426 40.1799V39.2852C28.8788 40.9988 32.9531 41.1076 36.5577 39.4082V40.1799C36.5577 40.45 36.6427 40.5886 36.8898 41.2326ZM31.0002 51.4863L32.654 52.5196L31.8841 53.5726H30.1164L29.3465 52.5196L31.0002 51.4863ZM30.3321 55.682H31.6685L32.8275 59.0308C32.5406 59.4805 32.2327 59.9632 31.9007 60.4836C31.482 61.1453 30.5224 61.1513 30.098 60.4802C29.7667 59.9611 29.4595 59.4796 29.1732 59.0308L30.3321 55.682ZM43.3181 22.0539H42.1172C41.4987 22.0539 40.9329 21.5994 40.9329 20.9411V18.7225C41.7263 18.8787 42.5212 19.0535 43.3181 19.2474V22.0539ZM45.8012 25.5872V27.7167C45.8012 28.5018 45.1623 29.1406 44.3772 29.1406H43.3877C43.425 28.4151 43.3948 29.364 43.406 24.1633H44.3728C44.3735 24.1633 44.3742 24.1631 44.3751 24.1631C44.3759 24.1631 44.3765 24.1633 44.3773 24.1633C45.1623 24.1633 45.8012 24.8021 45.8012 25.5872ZM44.9003 13.1469L44.1956 17.2902C35.4403 15.0989 26.8881 15.081 18.0625 17.2901L17.3578 13.1469C26.6222 10.6117 35.6355 10.6117 44.9003 13.1469ZM17.881 29.1407C17.0959 29.1407 16.4571 28.502 16.4571 27.7169V25.5874C16.4571 24.8023 17.0959 24.1634 17.881 24.1634H17.8854H18.856C18.8722 29.2366 18.8388 28.3384 18.8789 29.1407H17.881ZM18.9401 22.0539V19.2473C19.737 19.0534 20.532 18.8784 21.3254 18.7224C21.324 21.0892 21.3285 20.9507 21.3214 21.0425C21.2769 21.6097 20.7582 22.0539 20.1412 22.0539C20.1192 22.0539 18.8602 22.0539 18.9401 22.0539ZM20.9686 28.6501L20.9654 24.0571C22.2934 23.7192 23.3155 22.5901 23.4242 21.2085C23.4428 20.974 23.4312 21.0639 23.4348 18.3511C28.5818 17.5526 33.6765 17.5526 38.8236 18.3512C38.8271 21.0332 38.8156 20.9749 38.8342 21.208C38.943 22.5912 39.9669 23.7212 41.2968 24.0579C41.2972 30.2418 41.2848 28.3227 41.2975 28.6984C40.9606 41.755 21.2608 41.7919 20.9686 28.6501ZM20.4175 44.0351C21.1877 43.1707 22.0625 42.5313 22.8198 42.0799C22.7796 43.4968 23.359 44.9005 24.456 45.8711L29.2369 50.101C28.5915 50.5015 27.7345 51.0356 26.0792 52.074C25.5348 52.4143 24.8281 52.2631 24.4703 51.7296L20.3158 45.5262C20.3132 45.5221 20.3105 45.5182 20.3078 45.5141C20.3075 45.5137 20.3073 45.5131 20.307 45.5127C20.0135 45.0717 20.0392 44.4597 20.4175 44.0351ZM28.4036 54.8042L27.7258 56.7627C26.9964 55.6195 26.4942 54.8326 26.1485 54.2911C26.8995 54.1261 27.314 53.7712 27.5527 53.6405L28.4036 54.8042ZM59.4712 67.4188C59.4712 69.2229 58.0036 70.6905 56.1995 70.6905H50.725V63.4505C50.725 62.8679 50.2529 62.3958 49.6703 62.3958C49.0877 62.3958 48.6156 62.8679 48.6156 63.4505V70.6905H13.3848V63.4505C13.3848 62.8679 12.9128 62.3958 12.3302 62.3958C11.7475 62.3958 11.2755 62.8679 11.2755 63.4505V70.6905H5.80094C3.99686 70.6905 2.5293 69.2229 2.5293 67.4188V64.959C2.5293 57.1052 7.28987 50.1676 14.2912 47.1937L17.4578 52.215C17.6583 52.5331 18.0007 52.7072 18.3509 52.7072C18.5431 52.7072 18.7379 52.6546 18.9125 52.5445C19.4051 52.2339 19.5528 51.5825 19.242 51.0897L16.3239 46.4625C17.3222 46.1655 18.0069 46.0465 18.2063 46.0028C18.5866 47.0407 18.0827 45.5698 28.3175 61.6114C29.5656 63.5848 32.439 63.5785 33.6811 61.6148C41.6987 49.0472 43.4311 46.6997 43.4451 46.6884C43.5881 46.474 43.7175 46.2123 43.7943 46.0026C44.0109 46.05 44.6469 46.1559 45.6767 46.4622L35.4268 62.7152C33.3892 65.9462 28.6107 65.9454 26.5738 62.7152L21.8731 55.2614C21.5625 54.7686 20.9111 54.6212 20.4183 54.9319C19.9257 55.2425 19.7781 55.8939 20.0889 56.3867L24.7895 63.8405C27.6549 68.3838 34.3456 68.3839 37.2108 63.8405L47.7092 47.1933C54.7105 50.1672 59.471 57.1048 59.471 64.9587V67.4188H59.4712Z"
                  fill="black"
                />
              </svg>
            </div>
            <h4 className="ko-left-contant-h4">Let’s Start With Academy LMS</h4>
          </div>
          <div className="ko-rigth-contant">
            <div className="ko-secound-main-buttom-page position-relative">
              <a href="#" className="ko-secound-main-buttom-page-a">
                I’m a student
              </a>
            </div>
            <div className="ko-main-buttom-page position-relative">
              <a href="#" className="ko-main-buttom-page-a">
                Become an Instructor
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LastStart;
