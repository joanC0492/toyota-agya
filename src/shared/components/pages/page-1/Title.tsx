interface IProps {
  className?: string;
}

export const Title = ({ className = "" }: IProps) => {
  return (
    <div className={className}>
      <div className="ml-12 | mb-[10px]">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="168"
          height="13"
          viewBox="0 0 168 13"
          fill="none">
          <path
            d="M17.3039 11.2817C17.5156 11.6554 17.9693 11.8574 18.5945 11.8574L24.5231 11.8776H24.5937H24.9466C26.5699 11.8776 28.7679 10.5141 29.7358 8.88803L34.757 0.464563C34.757 0.464563 34.7772 0.434263 34.7873 0.414062H32.5993C32.3876 0.414062 32.0246 0.616064 31.8633 0.888766L27.1143 8.84763C26.9026 9.20113 26.4791 9.46373 26.096 9.46373H21.2765C21.0244 9.46373 20.8127 9.35263 20.7017 9.15063C20.5808 8.93853 20.6009 8.67592 20.7522 8.42342L25.491 0.464563C25.491 0.464563 25.5112 0.434263 25.5112 0.424163H23.3737C23.1619 0.424163 22.7989 0.626164 22.6376 0.898866L17.6265 9.29203C17.1526 10.0798 17.0417 10.807 17.3039 11.2817Z"
            fill="white"
          />
          <path
            d="M19.3809 0.4646H17.1324C16.9207 0.4646 16.5577 0.666601 16.3964 0.939303L13.0187 6.60544C12.8775 6.83775 12.6154 6.97915 12.3532 6.93875C12.1415 6.90845 11.9701 6.75695 11.9197 6.54484L11.0324 0.4646H8.1286C7.91687 0.4646 7.55389 0.666601 7.39257 0.939303L0.899316 11.8171C0.899316 11.8171 0.87915 11.8474 0.87915 11.8676H3.1175C3.32924 11.8676 3.69222 11.6656 3.85354 11.3929L7.51356 5.26213C7.65471 5.02983 7.92695 4.88843 8.17901 4.92883C8.39075 4.95913 8.56216 5.11063 8.61257 5.31264L9.60067 11.8676H12.1213C12.3331 11.8676 12.6961 11.6656 12.8574 11.3929L19.3506 0.5151C19.3506 0.5151 19.3708 0.4747 19.3809 0.4646Z"
            fill="white"
          />
          <path
            d="M47.199 2.72704C47.2595 2.72704 47.4309 2.63614 47.5015 2.52504L48.7518 0.434326H38.78C38.5682 0.434326 38.1952 0.646428 38.0439 0.90903L31.5305 11.8171C31.4902 11.8878 31.4801 11.9383 31.4801 11.9484L41.7544 11.8676C41.8249 11.8676 41.9863 11.7767 42.0568 11.6656L43.3575 9.49409H36.2795L36.0879 9.25169C35.9971 9.09009 36.0072 8.89819 36.1081 8.72649L36.8138 7.54478C36.9348 7.34278 37.1667 7.21148 37.3886 7.21148H43.1458C43.2063 7.21148 43.3777 7.12058 43.4483 7.00947L44.5775 5.11066H38.901L38.7094 4.86826C38.6186 4.70666 38.6287 4.51476 38.7296 4.34305L39.4858 3.08055C39.6068 2.87854 39.8387 2.73714 40.0605 2.73714H47.2192L47.199 2.72704Z"
            fill="white"
          />
          <path
            d="M61.9701 2.14121L63.5733 0.4646H61.1534C61.0022 0.4646 60.7299 0.5757 60.5283 0.787802L53.2284 8.45376C53.0167 8.67596 52.7142 8.72646 52.4823 8.60526C52.2706 8.49416 52.1697 8.25176 52.2302 8.00935L54.0552 0.4646H51.2926C51.1917 0.4646 51.0002 0.606001 50.98 0.686801L50.5565 2.48461C50.0255 4.71336 49.4541 7.08688 48.8425 9.60517L48.2778 11.9181L52.4117 11.8676C52.563 11.8676 52.8352 11.7464 53.0369 11.5343L54.7509 9.72637C57.3254 7.01281 59.7351 4.48106 61.9802 2.13111L61.9701 2.14121Z"
            fill="white"
          />
          <path
            d="M77.1547 2.97948C77.6286 2.19168 77.7395 1.46447 77.4774 0.989767C77.2656 0.616064 76.8018 0.414062 76.1767 0.414062H69.1289C67.4753 0.414062 65.3176 1.75737 64.3396 3.40368L60.8207 9.30213C60.3469 10.0899 60.2359 10.8171 60.4981 11.2918C60.7098 11.6655 61.1736 11.8675 61.7988 11.8675H68.8466C70.5001 11.8675 72.6578 10.5242 73.6358 8.87792L77.1547 2.97948ZM70.9034 8.87792C70.6917 9.23143 70.2682 9.48393 69.8851 9.48393H64.5816C64.3295 9.48393 64.1178 9.37283 64.0069 9.17083C63.8859 8.95873 63.906 8.69612 64.0573 8.44362L67.1023 3.34308C67.314 2.98958 67.7375 2.72698 68.1206 2.72698H73.4241C73.6762 2.72698 73.8879 2.83808 73.9988 3.04008C74.1198 3.25218 74.0997 3.51479 73.9484 3.76729L70.9034 8.86782V8.87792Z"
            fill="white"
          />
          <path
            d="M101.192 0.716988L100.143 2.4744C99.9214 2.8481 99.4274 3.15111 99.0443 3.15111H95.6766C95.596 3.15111 95.5052 3.21171 95.4548 3.29251L90.4941 11.6049C90.2723 11.9786 89.7783 12.2816 89.3951 12.2816H87.0862C86.703 12.2816 86.572 11.9786 86.8039 11.6049L91.7646 3.29251C91.815 3.21171 91.7847 3.15111 91.7041 3.15111H88.3364C87.9533 3.15111 87.8222 2.8481 88.0541 2.4744L89.1027 0.716988C89.3245 0.343285 89.8186 0.0402832 90.2017 0.0402832H100.91C101.293 0.0402832 101.414 0.343285 101.192 0.716988Z"
            fill="white"
          />
          <path
            d="M114.894 3.19162L111.375 9.09007C110.327 10.8576 108.018 12.2817 106.223 12.2817H99.1753C97.3806 12.2817 96.7857 10.8475 97.8444 9.09007L101.363 3.19162C102.412 1.42411 104.721 0 106.516 0H113.563C115.358 0 115.953 1.43421 114.894 3.19162ZM110.972 3.56533C111.103 3.34312 111.033 3.16132 110.801 3.16132H105.497C105.265 3.16132 104.973 3.34312 104.842 3.56533L101.797 8.66586C101.666 8.88807 101.736 9.06987 101.968 9.06987H107.272C107.504 9.06987 107.796 8.88807 107.927 8.66586L110.972 3.56533Z"
            fill="white"
          />
          <path
            d="M130.089 0.656388L121.559 7.78704C121.458 7.89814 121.367 8.00924 121.266 8.12034L119.189 11.6049C118.968 11.9786 118.474 12.2816 118.09 12.2816H115.781C115.398 12.2816 115.267 11.9786 115.499 11.6049L117.576 8.12034C117.617 7.99914 117.647 7.87794 117.687 7.75674V0.656388C117.677 0.383686 118.08 0.0402832 118.393 0.0402832H121.317C121.559 0.0402832 121.71 0.171584 121.71 0.373586V3.97931C121.71 4.10051 121.871 4.13081 121.992 4.02981L126.368 0.373586C126.62 0.161484 126.923 0.0402832 127.165 0.0402832H130.089C130.411 0.0402832 130.401 0.383686 130.089 0.656388Z"
            fill="white"
          />
          <path
            d="M143.378 3.19162L139.859 9.09007C138.81 10.8576 136.501 12.2817 134.707 12.2817H127.659C125.864 12.2817 125.269 10.8475 126.328 9.09007L129.847 3.19162C130.895 1.42411 133.204 0 134.999 0H142.047C143.842 0 144.437 1.43421 143.378 3.19162ZM139.456 3.56533C139.587 3.34312 139.516 3.16132 139.284 3.16132H133.981C133.749 3.16132 133.456 3.34312 133.325 3.56533L130.28 8.66586C130.149 8.88807 130.22 9.06987 130.452 9.06987H135.755C135.987 9.06987 136.28 8.88807 136.411 8.66586L139.456 3.56533Z"
            fill="white"
          />
          <path
            d="M158.593 0.716988L157.544 2.4744C157.322 2.8481 156.828 3.15111 156.445 3.15111H153.077C152.997 3.15111 152.906 3.21171 152.856 3.29251L147.895 11.6049C147.673 11.9786 147.179 12.2816 146.796 12.2816H144.487C144.104 12.2816 143.973 11.9786 144.205 11.6049L149.165 3.29251C149.216 3.21171 149.185 3.15111 149.105 3.15111H145.737C145.354 3.15111 145.223 2.8481 145.455 2.4744L146.503 0.716988C146.725 0.343285 147.219 0.0402832 147.603 0.0402832H158.31C158.693 0.0402832 158.814 0.343285 158.593 0.716988Z"
            fill="white"
          />
          <path
            d="M151.494 11.4334L163.049 0.686884C163.614 0.202081 164.118 0.0808798 164.753 0.0606797C164.924 0.0404795 165.106 0.0404795 165.308 0.0505796H165.398C165.469 0.0505796 165.529 0.0505796 165.61 0.0505796C165.862 0.0505796 166.144 0.0505796 166.467 0.0505796C166.467 0.0505796 167.082 0.0303795 167.042 0.676784L166.064 11.4233C166.044 11.6051 165.923 11.8172 165.731 11.9889C165.54 12.1606 165.308 12.2717 165.126 12.2717H162.343C162.152 12.2717 162.041 12.1505 162.061 11.9586L162.172 10.9486H156.274L155.88 11.3122L155.144 11.9586C154.933 12.1505 154.66 12.2717 154.438 12.2717H151.494C151.293 12.2717 151.162 12.1606 151.162 11.9889C151.162 11.8172 151.283 11.595 151.484 11.4233L151.494 11.4334ZM159.389 8.03974H162.484L162.807 4.84812L159.389 8.03974Z"
            fill="white"
          />
        </svg>
      </div>
      <div className="ml-[13px] | | mb-[10px]">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="453"
          height="48"
          viewBox="0 0 453 48"
          fill="none">
          <path
            d="M123.286 46.7106L138.41 18.6021C139.368 16.4912 140.931 14.7237 142.907 13.5319C145.599 11.9058 149.945 9.41107 155.51 6.62345C161.792 3.48233 167.176 2.12892 169.697 1.61381C170.594 1.43201 171.501 1.34111 172.419 1.34111H226.966C227.612 1.34111 228.237 1.51281 228.791 1.82592L239.066 7.68396C239.6 7.98696 239.378 8.79497 238.773 8.79497H179.416C177.934 8.79497 176.482 9.13837 175.161 9.79488C173.296 10.7241 170.534 12.1886 168.386 13.7238C166.379 15.158 164.605 16.6124 163.304 17.7537C161.802 19.0566 160.652 20.7232 159.947 22.5816L154.26 35.439C153.978 36.1965 154.532 37.6913 155.339 37.6913H202.324C202.859 37.6913 203.333 37.3782 203.554 36.9035L208.263 28.2073C208.535 27.6114 208.102 26.9347 207.456 26.9347H176.472C176.17 26.9347 175.978 26.6014 176.14 26.3489C176.472 25.8136 177.107 25.0763 179.023 23.1573C180.011 22.1675 181.221 21.3898 182.098 20.8949C182.814 20.4909 183.611 20.2889 184.438 20.2889H239.267C239.792 20.2889 240.165 20.804 240.003 21.2989L230.263 46.8621C230.072 47.4682 229.497 47.8823 228.862 47.8823H124.032C123.427 47.8823 123.034 47.256 123.276 46.7106H123.286ZM107.638 47.0035L128.912 2.38142C129.134 1.89662 128.781 1.34111 128.247 1.34111H70.5536C66.4902 1.34111 62.4572 1.93702 58.5652 3.10863C53.8365 4.53274 47.1819 6.63355 41.7574 8.74447C34.8608 11.4311 30.001 13.5824 26.6636 15.1782C22.6608 17.0972 19.2327 20.0364 16.712 23.6926L0.932578 46.6096C0.559518 47.145 0.94266 47.8823 1.59804 47.8823H24.8991C25.4537 47.8823 25.9578 47.5793 26.22 47.0945C27.571 44.5997 31.7856 36.8631 33.54 34.1159C34.6793 32.3281 37.4218 28.6214 39.4485 25.9146C41.0919 23.7229 43.1488 21.8948 45.5082 20.5111C47.8675 19.1273 51.2049 17.2386 54.3103 15.7438C58.3837 13.7743 61.8119 12.3603 64.0805 11.4816C65.9256 10.7645 67.8716 10.3807 69.8478 10.31L95.6595 9.48177C96.9702 9.44137 97.8474 10.8352 97.2324 11.9967L92.3725 21.309C91.9994 22.0261 91.2533 22.4907 90.4366 22.4907L66.1676 22.6725C65.1593 22.6725 64.1611 22.8846 63.2234 23.2684C61.7211 23.8946 59.2811 24.9854 56.9318 26.3893C54.0079 28.1366 51.8804 30.0152 50.8419 31.0151C50.5697 31.2777 50.7612 31.7423 51.1444 31.7322L85.244 31.3585C86.1918 31.3585 86.827 32.3281 86.4439 33.1967L80.1825 46.7207C79.9405 47.2561 80.3338 47.8621 80.9186 47.8621H106.266C106.851 47.8621 107.386 47.5187 107.628 46.9834L107.638 47.0035ZM431.655 46.3975L452.93 1.77542C453.151 1.29061 452.798 0.735107 452.264 0.735107H394.571C390.508 0.735107 386.474 1.33101 382.583 2.50262C377.854 3.92673 371.199 6.02755 365.775 8.13846C358.878 10.8251 354.018 12.9764 350.681 14.5722C346.678 16.4912 343.25 19.4303 340.729 23.0866L324.95 46.0036C324.577 46.5389 324.96 47.2763 325.615 47.2763H348.916C349.471 47.2763 349.975 46.9733 350.237 46.4885C351.588 43.9937 355.803 36.2571 357.557 33.5099C358.697 31.7221 361.439 28.0154 363.466 25.3086C365.109 23.1169 367.166 21.2888 369.525 19.905C371.935 18.491 375.222 16.6326 378.328 15.1378C382.401 13.1683 385.829 11.7543 388.098 10.8756C389.943 10.1585 391.889 9.77468 393.865 9.70398L419.677 8.87577C420.988 8.83537 421.865 10.2292 421.25 11.3907L416.39 20.703C416.017 21.4201 415.271 21.8847 414.454 21.8847L390.185 22.0665C389.177 22.0665 388.178 22.2786 387.241 22.6624C385.738 23.2886 383.298 24.3794 380.949 25.7833C378.025 27.5306 375.898 29.4092 374.859 30.4091C374.587 30.6717 374.779 31.1363 375.162 31.1262L409.261 30.7525C410.209 30.7525 410.844 31.7221 410.461 32.5907L404.2 46.1147C403.958 46.65 404.351 47.2561 404.936 47.2561H430.284C430.869 47.2561 431.403 46.9127 431.645 46.3773L431.655 46.3975ZM250.106 1.97742L279.296 22.0968C279.8 22.4402 279.991 23.0967 279.759 23.6623L268.326 46.6904C268.094 47.2561 268.507 47.8722 269.122 47.8722H295.408C296.134 47.8722 296.779 47.4177 297.031 46.741L306.952 25.5914C307.184 24.9551 307.648 24.4299 308.253 24.1168L352.919 2.69452C353.585 2.34102 353.333 1.34111 352.587 1.34111H331.846C331.393 1.34111 330.949 1.44211 330.536 1.62391L304.532 13.0976C303.998 13.34 303.383 13.3097 302.879 13.0067L284.125 1.77542C283.651 1.49261 283.117 1.34111 282.562 1.34111H250.338C249.995 1.34111 249.854 1.78551 250.136 1.97742H250.106Z"
            fill="white"
          />
        </svg>
      </div>
      <div>
        <svg
          width="444"
          height="27"
          viewBox="0 0 444 27"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <path
            d="M437.922 0.810628L14.63 1.34593C12.3009 1.34593 10.1734 2.65895 9.11476 4.72946L0.403319 21.7683C-0.816687 24.162 0.917536 27.0001 3.59953 27.0001L427.345 26.4547C431.327 26.4345 434.947 24.1216 436.651 20.5058L442.56 7.92108C444.062 4.56786 441.602 0.790427 437.932 0.810628H437.922Z"
            fill="#F68D35"
          />
          <path
            d="M25.6504 8.97135L24.9547 10.6177C24.8034 10.9712 24.4102 11.254 24.0674 11.254H21.0527C20.9821 11.254 20.9014 11.3146 20.8712 11.3853L17.5943 19.1421C17.4431 19.4956 17.0498 19.7784 16.707 19.7784H14.6401C14.2973 19.7784 14.146 19.4956 14.2872 19.1522L17.5641 11.3954C17.5943 11.3247 17.5641 11.2641 17.4935 11.2641H14.4788C14.136 11.2641 13.9746 10.9813 14.1259 10.6379L14.8216 8.99154C14.9728 8.63804 15.366 8.35524 15.7089 8.35524H25.2975C25.6403 8.34514 25.7915 8.62795 25.6504 8.97135Z"
            fill="white"
          />
          <path
            d="M37.9412 11.2642L35.6222 16.7687C34.9265 18.415 33.0612 19.7482 31.458 19.7583H25.1462C23.5431 19.7684 22.8071 18.4352 23.5028 16.7889L25.8218 11.2844C26.5175 9.63804 28.3828 8.30483 29.9859 8.29473H36.2977C37.9008 8.28463 38.6369 9.61784 37.9412 11.2642ZM34.4828 11.6177C34.5736 11.4056 34.4828 11.2339 34.2711 11.2339H29.5221C29.3205 11.2339 29.0785 11.4157 28.9877 11.6177L26.9813 16.3748C26.8905 16.5869 26.9813 16.7586 27.193 16.7586H31.942C32.1436 16.7586 32.3856 16.5768 32.4764 16.3647L34.4828 11.6076V11.6177Z"
            fill="white"
          />
          <path
            d="M36.5296 19.1119L40.8349 8.91078C40.9861 8.55728 41.3793 8.27447 41.7221 8.27447H49.0523C50.6554 8.26437 51.3914 9.59758 50.6957 11.2439L48.3767 16.7484C47.681 18.3947 45.8157 19.7381 44.2126 19.7381H36.8824C36.5396 19.7482 36.3884 19.4654 36.5296 19.1119ZM40.9962 16.3646C40.9054 16.5767 40.9962 16.7484 41.2079 16.7484H44.6965C44.8982 16.7484 45.1402 16.5767 45.2309 16.3646L47.2374 11.6075C47.3281 11.3954 47.2374 11.2237 47.0256 11.2237H43.537C43.3354 11.2237 43.0934 11.3954 43.0026 11.6075L40.9962 16.3646Z"
            fill="white"
          />
          <path
            d="M64.5495 11.2239L62.2304 16.7284C61.5347 18.3747 59.6694 19.718 58.0663 19.718H51.7545C50.1514 19.7281 49.4153 18.3949 50.111 16.7486L52.4301 11.2441C53.1258 9.59776 54.9911 8.26455 56.5942 8.25445H62.906C64.5091 8.24435 65.2452 9.57756 64.5495 11.2239ZM61.0911 11.5774C61.1818 11.3653 61.0911 11.1936 60.8794 11.1936H56.1304C55.9287 11.1936 55.6868 11.3754 55.596 11.5774L53.5896 16.3345C53.4988 16.5466 53.5896 16.7183 53.8013 16.7183H58.5503C58.7519 16.7183 58.9939 16.5365 59.0846 16.3345L61.0911 11.5774Z"
            fill="white"
          />
          <path
            d="M75.5497 8.2644H77.6166C77.9594 8.2644 78.1107 8.5472 77.9594 8.8906L74.8338 16.3142C74.7431 16.5263 74.8338 16.698 75.0455 16.698H80.0768C80.4196 16.698 80.5709 16.9707 80.4297 17.3242L79.7038 19.0513C79.5525 19.4048 79.1593 19.6876 78.8165 19.6876H70.7402C70.3974 19.6977 70.2462 19.4149 70.3873 19.0614L74.6725 8.90071C74.8237 8.5472 75.217 8.2644 75.5598 8.2644H75.5497Z"
            fill="white"
          />
          <path
            d="M96.2897 11.1833L93.9707 16.6879C93.275 18.3342 91.4097 19.6775 89.8065 19.6775H83.4947C81.8916 19.6876 81.1556 18.3544 81.8513 16.7081L84.1703 11.2035C84.866 9.55723 86.7313 8.22402 88.3344 8.21392H94.6462C96.2494 8.20382 96.9854 9.53704 96.2897 11.1833ZM92.8313 11.5369C92.9221 11.3247 92.8313 11.1531 92.6196 11.1531H87.8706C87.669 11.1531 87.427 11.3348 87.3363 11.5369L85.3298 16.294C85.2391 16.5061 85.3298 16.6778 85.5415 16.6778H90.2905C90.4921 16.6778 90.7341 16.496 90.8249 16.2839L92.8313 11.5267V11.5369Z"
            fill="white"
          />
          <path
            d="M112.735 19.1322C112.674 19.1625 112.624 19.2231 112.624 19.2837L112.603 20.1018C112.603 20.425 112.281 20.7987 111.918 20.93H111.908C111.474 21.0714 111.041 21.2431 110.607 21.3845C110.214 21.5158 109.73 21.7077 109.357 21.637C109.165 21.5966 109.034 21.4653 109.034 21.2532L109.075 19.718C109.075 19.718 109.044 19.6372 108.994 19.6372H104.628C103.025 19.6372 102.289 18.3141 102.985 16.6678L105.304 11.1633C105.999 9.51695 107.865 8.18374 109.468 8.17364H115.78C117.383 8.16354 118.119 9.49675 117.423 11.1431L115.104 16.6476C114.66 17.6879 113.753 18.5969 112.745 19.1322H112.735ZM113.955 11.4966C114.045 11.2845 113.955 11.1128 113.743 11.1128H108.994C108.792 11.1128 108.55 11.2946 108.459 11.4966L106.453 16.2537C106.362 16.4658 106.453 16.6375 106.665 16.6375H111.414C111.615 16.6375 111.857 16.4557 111.948 16.2537L113.955 11.4966Z"
            fill="white"
          />
          <path
            d="M131.7 8.78962L128.393 16.6374C127.697 18.2837 125.832 19.627 124.229 19.6169H123.916H118.552C116.959 19.6169 116.223 18.2736 116.919 16.6374L120.226 8.79972C120.377 8.44622 120.771 8.16341 121.113 8.16341H123.069C123.412 8.16341 123.563 8.44622 123.422 8.78962L120.287 16.2233C120.196 16.4354 120.287 16.6071 120.498 16.6071H124.814C125.015 16.6071 125.257 16.4253 125.348 16.2233L128.484 8.78962C128.635 8.43612 129.028 8.15332 129.371 8.15332H131.367C131.71 8.15332 131.872 8.43612 131.72 8.77952L131.7 8.78962Z"
            fill="white"
          />
          <path
            d="M129.381 18.9704L133.676 8.78956C133.828 8.43606 134.221 8.15326 134.564 8.15326H143.779C143.981 8.14316 144.082 8.31486 143.991 8.51686L143.083 10.6682C142.993 10.8803 142.751 11.052 142.549 11.052H136.147C136.076 11.052 135.995 11.1227 135.965 11.1934L135.471 12.3751C135.441 12.4458 135.471 12.5064 135.542 12.5064H140.694C140.896 12.5064 140.996 12.668 140.906 12.8801L140.069 14.8597C139.978 15.0718 139.746 15.2435 139.534 15.2435H134.382C134.312 15.2435 134.231 15.3041 134.201 15.3748L133.737 16.4757C133.707 16.5464 133.737 16.607 133.807 16.607H140.21C140.412 16.607 140.512 16.7686 140.422 16.9807L139.484 19.2229C139.393 19.435 139.151 19.6067 138.95 19.6067H129.734C129.391 19.6168 129.23 19.334 129.381 18.9805V18.9704Z"
            fill="white"
          />
          <path
            d="M148.609 18.9504L152.904 8.77967C153.055 8.42617 153.449 8.14337 153.791 8.14337H161.585C163.188 8.13327 163.924 9.46648 163.229 11.1128L162.846 12.0319C162.846 12.0319 162.825 12.0824 162.815 12.1127C162.563 12.7086 162.12 13.2338 161.585 13.6479C161.636 13.6075 161.817 14.2842 161.827 14.3448C161.868 14.5973 161.837 14.8397 161.777 15.1023C161.726 15.3144 161.636 15.5265 161.535 15.7689L161.111 16.7789C160.456 18.3242 158.712 19.5868 157.199 19.5868H148.972C148.629 19.5969 148.468 19.314 148.619 18.9605L148.609 18.9504ZM152.944 16.486C152.914 16.5567 152.944 16.6173 153.015 16.6173H157.33C157.633 16.6173 157.986 16.3547 158.117 16.0416L158.248 15.7285C158.379 15.4154 158.248 15.1629 157.935 15.1629H153.62C153.549 15.1629 153.469 15.2235 153.438 15.2942L152.934 16.486H152.944ZM154.699 12.3248C154.669 12.3955 154.699 12.4561 154.769 12.4561H158.802C159.105 12.4561 159.458 12.1935 159.589 11.8804L159.72 11.5673C159.851 11.2542 159.72 11.0017 159.407 11.0017H155.374C155.304 11.0017 155.223 11.0623 155.193 11.133L154.689 12.3248H154.699Z"
            fill="white"
          />
          <path
            d="M177.647 8.71907L174.34 16.5668C173.644 18.2131 171.779 19.5564 170.176 19.5463H169.863H164.499C162.906 19.5463 162.17 18.203 162.866 16.5668L166.173 8.72917C166.324 8.37567 166.717 8.09286 167.06 8.09286H169.016C169.359 8.09286 169.51 8.37566 169.369 8.71907L166.233 16.1527C166.143 16.3648 166.233 16.5365 166.445 16.5365H170.76C170.962 16.5365 171.204 16.3547 171.295 16.1527L174.431 8.71907C174.582 8.36556 174.975 8.08276 175.318 8.08276H177.314C177.657 8.08276 177.818 8.36556 177.667 8.70896L177.647 8.71907Z"
            fill="white"
          />
          <path
            d="M175.731 19.5362C175.388 19.5362 175.237 19.2534 175.378 18.8999L176.104 17.1728C176.256 16.8193 176.649 16.5365 176.992 16.5365H183.858C184.06 16.5264 184.301 16.3547 184.392 16.1426L184.624 15.5971C184.715 15.385 184.624 15.2133 184.412 15.2133H179.472C177.869 15.2133 177.133 13.8902 177.828 12.2439L178.322 11.0824C179.018 9.43611 180.883 8.10289 182.487 8.09279H189.786C190.129 8.08269 190.281 8.3655 190.139 8.719L189.444 10.3653C189.292 10.7188 188.899 11.0016 188.556 11.0016H181.882C181.68 11.0117 181.438 11.1834 181.347 11.3955L181.045 12.1126C180.954 12.3247 181.045 12.4964 181.257 12.4964H186.197C187.8 12.4964 188.536 13.8195 187.841 15.4658L187.387 16.5365C186.691 18.1828 184.826 19.516 183.223 19.5261H182.9H175.731V19.5362Z"
            fill="white"
          />
          <path
            d="M188.909 16.5365L191.238 11.042C191.934 9.39571 193.789 8.0726 195.392 8.0625H201.442C201.785 8.0625 201.946 8.3352 201.795 8.68871L201.079 10.3754C200.928 10.7289 200.535 11.0117 200.192 11.0117H194.929C194.727 11.0117 194.485 11.1935 194.394 11.4056L192.388 16.1426C192.297 16.3547 192.388 16.5264 192.6 16.5264H197.863C198.206 16.5264 198.357 16.7991 198.216 17.1526L197.49 18.8797C197.338 19.2332 196.945 19.516 196.602 19.516H190.543C188.94 19.5261 188.204 18.1929 188.899 16.5466L188.909 16.5365Z"
            fill="white"
          />
          <path
            d="M198.468 18.718L207.3 8.67851C207.734 8.224 208.177 8.1129 208.742 8.0927C208.893 8.0725 209.065 8.08261 209.236 8.08261H209.317C209.377 8.08261 209.438 8.08261 209.498 8.08261C209.73 8.08261 209.982 8.08261 210.264 8.08261C210.264 8.08261 210.809 8.0624 210.869 8.6684L211.505 18.6877C211.515 18.8594 211.434 19.0614 211.283 19.223C211.132 19.3846 210.94 19.4856 210.779 19.4856H208.288C208.117 19.4856 207.996 19.3745 207.996 19.2028L207.956 18.2534H202.672L202.37 18.6069L201.805 19.2129C201.644 19.3846 201.412 19.5058 201.22 19.5058H198.589C198.407 19.5058 198.276 19.4048 198.246 19.2432C198.216 19.0816 198.296 18.8796 198.458 18.7079L198.468 18.718ZM205.062 15.5466H207.835L207.673 12.567L205.062 15.5466Z"
            fill="white"
          />
          <path
            d="M213.128 19.4855C212.785 19.4855 212.634 19.2027 212.775 18.8492L213.501 17.1221C213.652 16.7686 214.045 16.4858 214.388 16.4858H221.255C221.456 16.4757 221.698 16.304 221.789 16.0919L222.021 15.5566C222.112 15.3445 222.021 15.1728 221.809 15.1728H216.869C215.265 15.1728 214.529 13.8497 215.225 12.2034L215.719 11.0419C216.415 9.39557 218.28 8.06236 219.883 8.05226H227.183C227.526 8.04216 227.677 8.32496 227.536 8.67846L226.84 10.3248C226.689 10.6783 226.296 10.9611 225.953 10.9611H219.278C219.077 10.9712 218.835 11.1429 218.744 11.355L218.442 12.0721C218.351 12.2842 218.442 12.4559 218.653 12.4559H223.594C225.197 12.4559 225.933 13.779 225.237 15.4253L224.784 16.4959C224.088 18.1422 222.223 19.4754 220.619 19.4855H220.297H213.128Z"
            fill="white"
          />
          <path
            d="M232.749 18.8191L237.044 8.63819C237.195 8.28469 237.589 8.00189 237.931 8.00189H247.147C247.349 7.99179 247.449 8.16349 247.359 8.36549L246.451 10.5168C246.36 10.7289 246.118 10.9006 245.917 10.9006H239.514C239.444 10.9006 239.363 10.9713 239.333 11.042L238.839 12.2237C238.809 12.2944 238.839 12.355 238.909 12.355H244.062C244.263 12.355 244.364 12.5166 244.273 12.7287L243.437 14.7083C243.346 14.9204 243.114 15.0921 242.902 15.0921H237.75C237.679 15.0921 237.599 15.1527 237.568 15.2234L237.105 16.3244C237.074 16.3951 237.105 16.4557 237.175 16.4557H243.578C243.779 16.4557 243.88 16.6173 243.789 16.8294L242.852 19.0615C242.761 19.2736 242.519 19.4453 242.317 19.4453H233.102C232.759 19.4554 232.598 19.1726 232.749 18.8191Z"
            fill="white"
          />
          <path
            d="M250.414 13.0721L247.994 18.7988C247.843 19.1523 247.449 19.4351 247.107 19.4351H245.06C244.717 19.4351 244.556 19.1523 244.707 18.8089L248.992 8.65837C249.143 8.30486 249.537 8.02206 249.879 8.02206H252.491C252.672 8.02206 252.813 8.10286 252.874 8.24426L254.538 13.9811C254.588 14.1023 254.769 14.072 254.83 13.9306L257.058 8.64826C257.209 8.29476 257.603 8.01196 257.945 8.01196H259.992C260.335 8.01196 260.486 8.29476 260.345 8.64826L256.06 18.7988C255.909 19.1523 255.516 19.4351 255.173 19.4351H252.914C252.733 19.4351 252.592 19.3543 252.531 19.2129L250.706 13.0317C250.656 12.9105 250.474 12.9408 250.414 13.0822V13.0721Z"
            fill="white"
          />
          <path
            d="M279.724 8.59781L279.028 10.2441C278.877 10.5976 278.484 10.8804 278.141 10.8804H275.126C275.056 10.8804 274.975 10.941 274.945 11.0117L271.668 18.7686C271.517 19.1221 271.124 19.4049 270.781 19.4049H268.714C268.371 19.4049 268.22 19.1221 268.361 18.7787L271.638 11.0218C271.668 10.9511 271.638 10.8905 271.567 10.8905H268.552C268.21 10.8905 268.048 10.6077 268.2 10.2643L268.895 8.61802C269.047 8.26451 269.44 7.98171 269.783 7.98171H279.371C279.714 7.97161 279.865 8.25441 279.724 8.59781Z"
            fill="white"
          />
          <path
            d="M292.448 8.5472L289.141 16.395C288.446 18.0413 286.58 19.3846 284.977 19.3745H284.665H279.301C277.708 19.3745 276.972 18.0312 277.667 16.395L280.974 8.5573C281.126 8.2038 281.519 7.92099 281.862 7.92099H283.818C284.16 7.92099 284.312 8.2038 284.171 8.5472L281.035 15.9809C280.944 16.193 281.035 16.3647 281.247 16.3647H285.562C285.764 16.3647 286.006 16.1829 286.096 15.9809L289.232 8.5472C289.383 8.1937 289.777 7.91089 290.119 7.91089H292.116C292.459 7.91089 292.62 8.19369 292.469 8.5371L292.448 8.5472Z"
            fill="white"
          />
          <path
            d="M310.92 13.4863C310.224 15.1326 308.359 16.4658 306.756 16.4759H301.755C301.684 16.486 301.604 16.5466 301.583 16.6173L300.696 18.7282C300.545 19.0817 300.152 19.3645 299.809 19.3645H297.752C297.409 19.3645 297.248 19.0817 297.399 18.7383L301.684 8.56751C301.835 8.21401 302.229 7.93121 302.571 7.93121H310.365C311.969 7.92111 312.705 9.25432 312.009 10.9006L310.91 13.4964L310.92 13.4863ZM308.208 10.7693H304.175C304.104 10.7693 304.023 10.8299 303.993 10.9006L302.904 13.4863C302.874 13.557 302.904 13.6175 302.975 13.6175H307.008C307.31 13.6175 307.663 13.3549 307.794 13.0418L308.52 11.3349C308.651 11.0218 308.52 10.7693 308.208 10.7693Z"
            fill="white"
          />
          <path
            d="M310.718 19.3443C310.375 19.3443 310.214 19.0615 310.365 18.708L314.651 8.53724C314.802 8.18374 315.195 7.90094 315.538 7.90094H323.342C324.945 7.89084 325.681 9.22404 324.985 10.8704L323.886 13.4661C323.412 14.5973 322.384 15.577 321.265 16.082C321.184 16.1224 321.124 16.2032 321.144 16.2638L321.85 18.5969C321.94 18.91 321.638 19.2938 321.285 19.2938C320.206 19.2938 319.531 19.3342 319.097 19.3241C318.341 19.3342 318.099 19.3039 318.038 19.0211L317.454 16.6274C317.423 16.5264 317.343 16.4557 317.222 16.4557H314.721C314.651 16.4557 314.57 16.5163 314.54 16.587L313.652 18.6979C313.501 19.0514 313.108 19.3342 312.765 19.3342H310.708L310.718 19.3443ZM315.871 13.4762C315.84 13.5469 315.871 13.6075 315.941 13.6075H319.974C320.277 13.6075 320.63 13.3449 320.761 13.0318L321.487 11.3249C321.618 11.0118 321.487 10.7593 321.174 10.7593H317.141C317.07 10.7593 316.99 10.8199 316.959 10.8906L315.871 13.4762Z"
            fill="white"
          />
          <path
            d="M330.823 7.89062C331.166 7.89062 331.317 8.17342 331.176 8.52693L326.891 18.6876C326.74 19.0411 326.347 19.3239 326.004 19.3239H323.937C323.594 19.3239 323.443 19.0411 323.584 18.6977L327.869 8.53703C328.02 8.18353 328.413 7.90073 328.756 7.90073H330.823V7.89062Z"
            fill="white"
          />
          <path
            d="M336.48 7.89072C336.722 7.89072 336.873 8.03212 336.883 8.25432L336.994 15.3244C336.994 15.4557 337.165 15.486 337.266 15.3749L343.588 8.25432C343.779 8.03212 344.062 7.88062 344.304 7.88062H346.693C347.036 7.88062 347.187 8.16342 347.046 8.50682L342.761 18.6574C342.61 19.0109 342.217 19.2937 341.874 19.2937H340.009C339.666 19.2937 339.514 19.0109 339.656 18.6675L341.37 14.6073L337.518 18.9402C337.327 19.1624 337.044 19.3139 336.802 19.3139H334.332C334.09 19.3139 333.939 19.1725 333.929 18.9503L333.727 14.6477L332.023 18.6877C331.872 19.0412 331.479 19.324 331.136 19.324H329.27C328.928 19.324 328.776 19.0412 328.918 18.6978L333.203 8.54722C333.354 8.19372 333.747 7.91091 334.09 7.91091H336.48V7.89072Z"
            fill="white"
          />
          <path
            d="M344.798 18.6575L349.093 8.47658C349.244 8.12307 349.638 7.84027 349.98 7.84027H359.196C359.398 7.83017 359.498 8.00187 359.408 8.20387L358.5 10.3552C358.409 10.5673 358.168 10.739 357.966 10.739H351.563C351.493 10.739 351.412 10.8097 351.382 10.8804L350.888 12.0621C350.858 12.1328 350.888 12.1934 350.958 12.1934H356.111C356.312 12.1934 356.413 12.355 356.322 12.5671L355.486 14.5467C355.395 14.7588 355.163 14.9305 354.951 14.9305H349.799C349.728 14.9305 349.648 14.9911 349.617 15.0618L349.154 16.1627C349.123 16.2334 349.154 16.294 349.224 16.294H355.627C355.828 16.294 355.929 16.4556 355.838 16.6677L354.901 18.8999C354.81 19.112 354.568 19.2837 354.366 19.2837H345.151C344.808 19.2938 344.647 19.011 344.798 18.6575Z"
            fill="white"
          />
          <path
            d="M357.109 19.2735C356.766 19.2735 356.605 18.9907 356.756 18.6372L361.051 8.46644C361.202 8.11293 361.596 7.83014 361.938 7.83014H369.742C371.346 7.82004 372.082 9.15324 371.386 10.7996L370.287 13.3953C369.813 14.5265 368.785 15.5062 367.665 16.0112C367.585 16.0516 367.524 16.1324 367.544 16.193L368.25 18.5261C368.341 18.8392 368.038 19.223 367.686 19.223C366.607 19.223 365.931 19.2634 365.498 19.2533C364.741 19.2634 364.499 19.2331 364.439 18.9503L363.854 16.5566C363.834 16.4556 363.743 16.3849 363.622 16.3849H361.122C361.051 16.3849 360.97 16.4455 360.94 16.5162L360.053 18.6271C359.902 18.9806 359.508 19.2634 359.166 19.2634H357.109V19.2735ZM362.261 13.4054C362.231 13.4761 362.261 13.5367 362.332 13.5367H366.365C366.667 13.5367 367.02 13.2741 367.151 12.961L367.867 11.2541C367.998 10.941 367.867 10.6885 367.554 10.6885H363.521C363.451 10.6885 363.37 10.7491 363.35 10.8198L362.261 13.4054Z"
            fill="white"
          />
          <path
            d="M376.558 18.4555L385.391 8.41605C385.824 7.96155 386.268 7.85045 386.833 7.83025C386.984 7.81005 387.155 7.82015 387.327 7.82015C387.357 7.82015 387.387 7.82015 387.407 7.82015C387.468 7.82015 387.528 7.82015 387.589 7.82015C387.821 7.82015 388.073 7.82015 388.355 7.82015C388.355 7.82015 388.899 7.79995 388.96 8.40596L389.595 18.4252C389.605 18.5969 389.525 18.7989 389.373 18.9605C389.222 19.1221 389.031 19.2231 388.869 19.2231H386.379C386.207 19.2231 386.086 19.112 386.086 18.9403L386.046 17.9909H380.763L380.46 18.3444L379.896 18.9504C379.734 19.1221 379.502 19.2433 379.311 19.2433H376.679C376.498 19.2433 376.367 19.1423 376.336 18.9807C376.306 18.8191 376.387 18.6171 376.548 18.4454L376.558 18.4555ZM383.152 15.2841H385.925L385.764 12.3046L383.152 15.2841Z"
            fill="white"
          />
          <path
            d="M406.272 8.37557L402.965 16.2233C402.269 17.8696 400.404 19.2129 398.801 19.2028H398.488H393.124C391.531 19.2028 390.795 17.8595 391.491 16.2233L394.798 8.38566C394.949 8.03216 395.342 7.74936 395.685 7.74936H397.641C397.984 7.74936 398.135 8.03216 397.994 8.37557L394.858 15.8092C394.768 16.0213 394.858 16.193 395.07 16.193H399.385C399.587 16.193 399.829 16.0112 399.92 15.8092L403.056 8.37557C403.207 8.02206 403.6 7.73926 403.943 7.73926H405.939C406.282 7.73926 406.433 8.02206 406.292 8.36547L406.272 8.37557Z"
            fill="white"
          />
          <path
            d="M418.311 8.39566L417.615 10.042C417.464 10.3955 417.07 10.6783 416.728 10.6783H413.713C413.642 10.6783 413.562 10.7389 413.531 10.8096L410.255 18.5664C410.103 18.9199 409.71 19.2027 409.367 19.2027H407.3C406.958 19.2027 406.806 18.9199 406.947 18.5765L410.224 10.8197C410.255 10.749 410.224 10.6884 410.154 10.6884H407.139C406.796 10.6884 406.635 10.4056 406.786 10.0622L407.482 8.41586C407.633 8.06236 408.026 7.77956 408.369 7.77956H417.958C418.301 7.76946 418.452 8.05226 418.311 8.39566Z"
            fill="white"
          />
          <path
            d="M430.602 10.6885L428.282 16.193C427.587 17.8393 425.722 19.1826 424.118 19.1826H417.807C416.203 19.1927 415.467 17.8595 416.163 16.2132L418.482 10.7087C419.178 9.06236 421.043 7.72915 422.646 7.71905H428.958C430.561 7.70895 431.297 9.04216 430.602 10.6885ZM427.143 11.042C427.234 10.8299 427.143 10.6582 426.931 10.6582H422.182C421.981 10.6582 421.739 10.84 421.648 11.042L419.642 15.7991C419.551 16.0112 419.642 16.1829 419.853 16.1829H424.602C424.804 16.1829 425.046 16.0011 425.137 15.7991L427.143 11.042Z"
            fill="white"
          />
        </svg>
      </div>
    </div>
  );
};
