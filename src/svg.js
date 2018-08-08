(function (window) {
    var svgSprite =
        '<svg><symbol id="icon-download" viewBox="0 0 1024 1024"><path d="M332.32 464.112l144 160 0 0C485.104 633.856 497.84 640 512 640s26.88-6.144 35.68-15.888l0 0 144-160 0 0C699.328 455.6 704 444.352 704 432c0-26.512-21.488-48-48-48-14.16 0-26.912 6.128-35.68 15.888l0 0L560 466.912 560 176c0-26.512-21.488-48-48-48s-48 21.488-48 48l0 290.912-60.32-67.024 0 0C394.896 390.144 382.16 384 368 384c-26.512 0-48 21.488-48 48C320 444.352 324.672 455.6 332.32 464.112L332.32 464.112zM880 560c-26.512 0-48 21.488-48 48l0 192L192 800 192 608c0-26.512-21.488-48-48-48s-48 21.488-48 48l0 240c0 26.512 21.488 48 48 48l367.952 0c0.016 0 0.032 0 0.048 0s0.032 0 0.048 0L880 896c26.512 0 48-21.488 48-48L928 608C928 581.488 906.512 560 880 560z"  ></path></symbol><symbol id="icon-setting" viewBox="0 0 1024 1024"><path d="M887.466667 618.666667l-51.2 0c-6.4 17.066667-12.8 32-19.2 46.933333l36.266667 36.266667c21.333333 21.333333 19.2 53.333333 0 74.666667l-74.666667 74.666667c-21.333333 21.333333-53.333333 21.333333-74.666667 0l-36.266667-36.266667c-14.933333 8.533333-29.866667 14.933333-46.933333 19.2l0 51.2c0 29.866667-23.466667 51.2-53.333333 51.2l-106.666667 0c-29.866667 0-53.333333-23.466667-53.333333-51.2l0-51.2c-17.066667-6.4-32-12.8-46.933333-19.2l-36.266667 36.266667c-21.333333 21.333333-53.333333 19.2-74.666667 0l-74.666667-74.666667c-21.333333-21.333333-21.333333-53.333333 0-74.666667l36.266667-36.266667c-8.533333-14.933333-12.8-29.866667-19.2-46.933333L136.533333 618.666667C108.8 618.666667 85.333333 595.2 85.333333 565.333333l0-106.666667C85.333333 428.8 108.8 405.333333 136.533333 405.333333l51.2 0c6.4-17.066667 12.8-32 19.2-46.933333l-36.266667-36.266667c-21.333333-21.333333-19.2-53.333333 0-74.666667l74.666667-74.666667c21.333333-21.333333 53.333333-21.333333 74.666667 0l36.266667 36.266667c14.933333-8.533333 29.866667-14.933333 46.933333-19.2L403.2 136.533333C405.333333 108.8 428.8 85.333333 458.666667 85.333333l106.666667 0C595.2 85.333333 618.666667 108.8 618.666667 136.533333l0 51.2c17.066667 6.4 32 12.8 46.933333 19.2l36.266667-36.266667c21.333333-21.333333 53.333333-19.2 74.666667 0l74.666667 74.666667c21.333333 21.333333 21.333333 53.333333 0 74.666667l-36.266667 36.266667c8.533333 14.933333 12.8 29.866667 19.2 46.933333l51.2 0c29.866667 0 51.2 23.466667 51.2 53.333333l0 106.666667C938.666667 595.2 915.2 618.666667 887.466667 618.666667zM896 448l-91.733333 0c-4.266667-19.2-10.666667-38.4-19.2-57.6 0 0 0 0 0 0l0 0c-6.4-12.8-12.8-27.733333-21.333333-38.4l66.133333-66.133333-89.6-89.6-66.133333 66.133333c-29.866667-19.2-61.866667-32-96-40.533333l0 0L578.133333 128l-128 0 0 91.733333 0 0c-34.133333 8.533333-68.266667 21.333333-96 40.533333l-66.133333-66.133333-89.6 89.6 66.133333 66.133333c-10.666667 17.066667-19.2 34.133333-27.733333 53.333333 0 0 0 0 0 2.133333l0 0c-4.266667 12.8-10.666667 27.733333-12.8 42.666667L128 448l0 128 91.733333 0c8.533333 34.133333 21.333333 68.266667 40.533333 96l-66.133333 66.133333 89.6 89.6 66.133333-66.133333c17.066667 10.666667 36.266667 19.2 53.333333 27.733333l0 0c12.8 4.266667 27.733333 10.666667 42.666667 12.8L445.866667 896l128 0 0-91.733333c14.933333-4.266667 29.866667-8.533333 42.666667-12.8l0 0c19.2-6.4 38.4-17.066667 53.333333-27.733333l66.133333 66.133333 89.6-89.6-66.133333-66.133333c10.666667-17.066667 19.2-34.133333 27.733333-53.333333 0 0 0 0 0-2.133333l0 0c4.266667-12.8 10.666667-27.733333 12.8-42.666667L896 576 896 448zM512 640c-70.4 0-128-57.6-128-128 0-70.4 57.6-128 128-128s128 57.6 128 128C640 582.4 582.4 640 512 640zM512 426.666667c-46.933333 0-85.333333 38.4-85.333333 85.333333 0 46.933333 38.4 85.333333 85.333333 85.333333 46.933333 0 85.333333-38.4 85.333333-85.333333C597.333333 465.066667 558.933333 426.666667 512 426.666667z"  ></path></symbol><symbol id="icon-down" viewBox="0 0 1024 1024"><path d="M512 729.53553953a43.3983399 43.3983399 0 0 1-30.75952455-12.73670591l-348.05686298-348.05686296a43.50710736 43.50710736 0 0 1 61.51905051-61.5299274L512 624.4985034l317.29733702-317.29733702a43.50710736 43.50710736 0 1 1 61.51905051 61.52992739l-348.05686298 348.05686297A43.36570926 43.36570926 0 0 1 512 729.53553953z"  ></path></symbol><symbol id="icon-clear" viewBox="0 0 1024 1024"><path d="M-109.37837037-150.80359506L-109.37837037 1174.80359506-109.37837037-150.80359506Z"  ></path><path d="M-67.95314569-150.80359506L-67.95314569 1174.80359506-67.95314569-150.80359506Z"  ></path><path d="M-26.52792098-150.80359506L-26.52792098 1174.80359506-26.52792098-150.80359506Z"  ></path><path d="M14.8973037-150.80359506L14.8973037 1174.80359506 14.8973037-150.80359506Z"  ></path><path d="M56.32252839-150.80359506L56.32252839 1174.80359506 56.32252839-150.80359506Z"  ></path><path d="M97.74775309-150.80359506L97.74775309 1174.80359506 97.74775309-150.80359506Z"  ></path><path d="M139.17297778-150.80359506L139.17297778 1174.80359506 139.17297778-150.80359506Z"  ></path><path d="M180.59820247-150.80359506L180.59820247 1174.80359506 180.59820247-150.80359506Z"  ></path><path d="M222.02342717-150.80359506L222.02342717 1174.80359506 222.02342717-150.80359506Z"  ></path><path d="M263.44865185-150.80359506L263.44865185 1174.80359506 263.44865185-150.80359506Z"  ></path><path d="M304.87387653-150.80359506L304.87387653 1174.80359506 304.87387653-150.80359506Z"  ></path><path d="M346.29910124-150.80359506L346.29910124 1174.80359506 346.29910124-150.80359506Z"  ></path><path d="M387.72432592-150.80359506L387.72432592 1174.80359506 387.72432592-150.80359506Z"  ></path><path d="M429.14955061-150.80359506L429.14955061 1174.80359506 429.14955061-150.80359506Z"  ></path><path d="M470.57477531-150.80359506L470.57477531 1174.80359506 470.57477531-150.80359506Z"  ></path><path d="M512-150.80359506L512 1174.80359506 512-150.80359506Z"  ></path><path d="M553.42522469-150.80359506L553.42522469 1174.80359506 553.42522469-150.80359506Z"  ></path><path d="M594.85044939-150.80359506L594.85044939 1174.80359506 594.85044939-150.80359506Z"  ></path><path d="M636.27567408-150.80359506L636.27567408 1174.80359506 636.27567408-150.80359506Z"  ></path><path d="M677.70089876-150.80359506L677.70089876 1174.80359506 677.70089876-150.80359506Z"  ></path><path d="M719.12612347-150.80359506L719.12612347 1174.80359506 719.12612347-150.80359506Z"  ></path><path d="M760.55134815-150.80359506L760.55134815 1174.80359506 760.55134815-150.80359506Z"  ></path><path d="M801.97657283-150.80359506L801.97657283 1174.80359506 801.97657283-150.80359506Z"  ></path><path d="M843.40179753-150.80359506L843.40179753 1174.80359506 843.40179753-150.80359506Z"  ></path><path d="M884.82702222-150.80359506L884.82702222 1174.80359506 884.82702222-150.80359506Z"  ></path><path d="M926.25224691-150.80359506L926.25224691 1174.80359506 926.25224691-150.80359506Z"  ></path><path d="M967.67747161-150.80359506L967.67747161 1174.80359506 967.67747161-150.80359506Z"  ></path><path d="M1009.1026963-150.80359506L1009.1026963 1174.80359506 1009.1026963-150.80359506Z"  ></path><path d="M1050.52792098-150.80359506L1050.52792098 1174.80359506 1050.52792098-150.80359506Z"  ></path><path d="M1091.95314569-150.80359506L1091.95314569 1174.80359506 1091.95314569-150.80359506Z"  ></path><path d="M1133.37837037-150.80359506L1133.37837037 1174.80359506 1133.37837037-150.80359506Z"  ></path><path d="M-150.80359506-109.37837037L1174.80359506-109.37837037-150.80359506-109.37837037Z"  ></path><path d="M-150.80359506-67.95314569L1174.80359506-67.95314569-150.80359506-67.95314569Z"  ></path><path d="M-150.80359506-26.52792098L1174.80359506-26.52792098-150.80359506-26.52792098Z"  ></path><path d="M-150.80359506 14.8973037L1174.80359506 14.8973037-150.80359506 14.8973037Z"  ></path><path d="M-150.80359506 56.32252839L1174.80359506 56.32252839-150.80359506 56.32252839Z"  ></path><path d="M-150.80359506 97.74775309L1174.80359506 97.74775309-150.80359506 97.74775309Z"  ></path><path d="M-150.80359506 139.17297778L1174.80359506 139.17297778-150.80359506 139.17297778Z"  ></path><path d="M-150.80359506 180.59820247L1174.80359506 180.59820247-150.80359506 180.59820247Z"  ></path><path d="M-150.80359506 222.02342717L1174.80359506 222.02342717-150.80359506 222.02342717Z"  ></path><path d="M-150.80359506 263.44865185L1174.80359506 263.44865185-150.80359506 263.44865185Z"  ></path><path d="M-150.80359506 304.87387653L1174.80359506 304.87387653-150.80359506 304.87387653Z"  ></path><path d="M-150.80359506 346.29910124L1174.80359506 346.29910124-150.80359506 346.29910124Z"  ></path><path d="M-150.80359506 387.72432592L1174.80359506 387.72432592-150.80359506 387.72432592Z"  ></path><path d="M-150.80359506 429.14955061L1174.80359506 429.14955061-150.80359506 429.14955061Z"  ></path><path d="M-150.80359506 470.57477531L1174.80359506 470.57477531-150.80359506 470.57477531Z"  ></path><path d="M-150.80359506 512L1174.80359506 512-150.80359506 512Z"  ></path><path d="M-150.80359506 553.42522469L1174.80359506 553.42522469-150.80359506 553.42522469Z"  ></path><path d="M-150.80359506 594.85044939L1174.80359506 594.85044939-150.80359506 594.85044939Z"  ></path><path d="M-150.80359506 636.27567408L1174.80359506 636.27567408-150.80359506 636.27567408Z"  ></path><path d="M-150.80359506 677.70089876L1174.80359506 677.70089876-150.80359506 677.70089876Z"  ></path><path d="M-150.80359506 719.12612347L1174.80359506 719.12612347-150.80359506 719.12612347Z"  ></path><path d="M-150.80359506 760.55134815L1174.80359506 760.55134815-150.80359506 760.55134815Z"  ></path><path d="M-150.80359506 801.97657283L1174.80359506 801.97657283-150.80359506 801.97657283Z"  ></path><path d="M-150.80359506 843.40179753L1174.80359506 843.40179753-150.80359506 843.40179753Z"  ></path><path d="M-150.80359506 884.82702222L1174.80359506 884.82702222-150.80359506 884.82702222Z"  ></path><path d="M-150.80359506 926.25224691L1174.80359506 926.25224691-150.80359506 926.25224691Z"  ></path><path d="M-150.80359506 967.67747161L1174.80359506 967.67747161-150.80359506 967.67747161Z"  ></path><path d="M-150.80359506 1009.1026963L1174.80359506 1009.1026963-150.80359506 1009.1026963Z"  ></path><path d="M-150.80359506 1050.52792098L1174.80359506 1050.52792098-150.80359506 1050.52792098Z"  ></path><path d="M-150.80359506 1091.95314569L1174.80359506 1091.95314569-150.80359506 1091.95314569Z"  ></path><path d="M-150.80359506 1133.37837037L1174.80359506 1133.37837037-150.80359506 1133.37837037Z"  ></path><path d="M512 45.96622222c-257.35420839 0-466.03377778 208.67956939-466.03377778 466.03377778s208.67956939 466.03377778 466.03377778 466.03377778c257.35420839 0 466.03377778-208.67956939 466.03377778-466.03377778S769.35420839 45.96622222 512 45.96622222zM709.8054479 665.79114667c12.16865975 12.16865975 12.16865975 31.84564148 0 44.01430123-12.16865975 12.16865975-31.84564148 12.16865975-44.01430123 0L512 556.01430124l-153.79114667 153.79114666c-12.16865975 12.16865975-31.84564148 12.16865975-44.01430123 0-12.16865975-12.16865975-12.16865975-31.84564148 0-44.01430123L467.98569876 512 314.1945521 358.20885333c-12.16865975-12.16865975-12.16865975-31.84564148 0-44.01430123 12.16865975-12.16865975 31.84564148-12.16865975 44.01430123 0L512 467.98569876l153.79114667-153.79114666c12.16865975-12.16865975 31.84564148-12.16865975 44.01430123 0 12.16865975 12.16865975 12.16865975 31.84564148 0 44.01430123L556.01430124 512 709.8054479 665.79114667z"  ></path></symbol><symbol id="icon-thumbs-up" viewBox="0 0 1024 1024"><path d="M958.7 512c-8.7-66.9-23.8-112.1-111.8-112.1H623.3s26.9-55.9 27.9-140.2c-1.1-2.7-4.7-168.2-111.8-168.2-77.4 0-86.3 88.8-98.1 129.6-29 112.4-98 201.5-209.3 206.8H120.3c-38.9 3.6-55 24.2-55.9 52.2-0.9 28 0 396.3 0 396.3 0 39.2 24.4 56.1 55.9 56.1h111.8c13.4 0 18.7-0.1 22.5-0.1 1.9 0 3.4 0 5.4 0.1h531.4c28.1 0 55.5-3.3 83.5-56.1-1.5 0 97.5-220.2 83.8-364.4z m-830.5-20.1H212v376.6h-83.6c-0.3-134.6-0.6-328.6-0.2-376.6z m691.1 350.8c-1.2 3.1-2.2 5.5-3 7.5-7.8 13.7-12.7 17.2-13.3 17.6-0.9 0.3-3.5 0.7-11.6 0.7H268V488.3c23.6-4 46.2-11.2 67.4-21.5 29-14 55.5-33.6 78.8-58.3 21.1-22.5 39.6-49.2 55-79.5 14-27.6 25.4-58.2 34-91 1.9-6.8 3.6-13.8 5.4-21.2 4.3-17.7 9.6-39.7 17.8-53 2.1-3.3 4.2-5.9 5.8-6.9 1.7-1.1 4.9-1.3 7.3-1.3 7.8 0 11.9 2.3 15.7 5.7 4.2 3.8 10.5 11.6 16.8 27.2 7.7 19.2 12.8 43.7 15.1 72.7 0 0.4 0.1 0.9 0.1 1.3-1.4 63.3-20.1 106.5-21.7 109.9l-45.8 91.5h327.2c16.7 0 25.9 2.1 30.6 3.9 3.7 1.4 4.6 2.5 5.1 3.2 7 8.7 10.9 37.1 12.4 48.1 4 44.7-5.2 108.1-26.8 183.3-18.3 64.2-40.6 119.5-48.9 140.3z"  ></path></symbol><symbol id="icon-success" viewBox="0 0 1025 1024"><path d="M511.71875 961.26083984c-60.34482422 0-119.00390625-11.92148438-174.34863281-35.43486328-53.3953125-22.68369141-101.40205078-55.11884766-142.68691406-96.40371093-41.28398438-41.28398438-73.71914063-89.29072266-96.40371094-142.68691407-23.51162109-55.34472656-35.43310547-114.00380859-35.43310547-174.3477539s11.92148438-119.00390625 35.43310547-174.34863282c22.68457031-53.3953125 55.11972656-101.40205078 96.40371093-142.68691406 41.28486328-41.28398438 89.29160156-73.71914063 142.68691407-96.40371094 55.34472656-23.51162109 114.00380859-35.43310547 174.34863281-35.43310546s119.00302734 11.92148438 174.34775391 35.43310546c53.3953125 22.68457031 101.40292969 55.11972656 142.68691406 96.40371094 41.28486328 41.28486328 73.72001953 89.29160156 96.40458984 142.68691406 23.5125 55.34472656 35.43486328 114.00380859 35.43486328 174.34863282s-11.92148438 119.00302734-35.43486328 174.3477539c-22.68457031 53.39619141-55.11884766 101.40292969-96.40371094 142.68691407-41.28398438 41.28486328-89.29160156 73.72001953-142.68691406 96.40371093-55.34472656 23.5125-114.0046875 35.43486328-174.34863281 35.43486328zM511.71875 106.71171875c-54.50888672 0-107.48496094 10.76484375-157.4578125 31.99482422-48.27216797 20.50751953-91.68574219 49.84277344-129.03310547 87.19101562s-66.68349609 80.76181641-87.19101562 129.03310547c-21.23085937 49.97285156-31.99482422 102.94980469-31.99482422 157.4578125 0 54.50800781 10.76484375 107.48408203 31.99482422 157.4578125 20.50751953 48.27216797 49.84277344 91.68574219 87.19101562 129.03398438 37.34736328 37.34736328 80.76181641 66.68349609 129.03310547 87.19101562 49.97285156 21.23085937 102.94980469 31.99482422 157.4578125 31.99482422 54.50800781 0 107.48496094-10.76484375 157.45869141-31.99482422 48.27216797-20.50751953 91.68574219-49.84365234 129.03310547-87.19101562 37.34824219-37.34824219 66.684375-80.76181641 87.19189453-129.03398438 21.23085937-49.97285156 31.99482422-102.94980469 31.99482421-157.4578125s-10.76484375-107.48496094-31.99570312-157.4578125c-20.50751953-48.27216797-49.84365234-91.68574219-87.19101562-129.03310547-37.34824219-37.34736328-80.76181641-66.68349609-129.03398438-87.19101562-49.97373047-21.23085937-102.95068359-31.99482422-157.4578125-31.99482422z"  ></path><path d="M459.07226562 668.31259766c-5.46943359 0-10.94414062-1.9828125-15.26220703-5.97216797l-159.27539062-147.12539063c-9.1265625-8.43134766-9.69169922-22.66523438-1.26035156-31.79179687 8.43134766-9.12832031 22.66435547-9.69082031 31.79179687-1.26035157l143.39091797 132.45468751 254.66572266-254.66660157c8.78642578-8.78554687 23.02998047-8.78554687 31.81552734 0s8.78554687 23.02998047 0 31.81552735l-269.95517578 269.95693359c-4.38310547 4.38310547-10.14345703 6.58916016-15.91083984 6.58916016z"  ></path></symbol><symbol id="icon-error" viewBox="0 0 1024 1024"><path d="M508.18666625 44.13333313c-258.05333344 0-466.66666688 208.63999969-466.66666594 466.66666687s208.62666656 466.66666688 466.66666594 466.66666688 466.66666688-208.63999969 466.66666688-466.66666688c0.01333312-258.02666625-208.62666656-466.66666688-466.66666688-466.66666687z m0 878.42666718c-225.09333375 0-411.77333344-186.64000031-411.7733325-411.76000031S283.10666656 99.05333375 508.18666625 99.05333375 919.94666656 285.70666625 919.94666656 510.82666625c0.01333312 225.12-186.66666656 411.73333313-411.76000031 411.73333406z"  ></path><path d="M542.6 508.93333344l131.16-131.17333313a31.29333375 31.29333375 0 0 0-44.23999969-44.22666656l-131.16 131.17333312-131.34666656-131.32000031a31.27999969 31.27999969 0 0 0-44.20000031 44.23999969l131.33333343 131.33333344-127.02666656 127.04000062a31.22666625 31.22666625 0 0 0-0.01333406 44.19999938c12.21333375 12.22666688 31.99999969 12.22666688 44.21333344 0l127.04000062-127.01333344 128.06666625 128.05333406a31.27999969 31.27999969 0 1 0 44.22666656-44.21333343l-128.05333312-128.09333344z"  ></path></symbol><symbol id="icon-tips" viewBox="0 0 1024 1024"><path d="M938.81 329.63c-23.37-55.2-56.76-104.79-99.33-147.33A462.3 462.3 0 0 0 511.7 46.55 461.94 461.94 0 0 0 183.92 182.3 462.3 462.3 0 0 0 48.14 510.05 462.3 462.3 0 0 0 183.92 837.8a461.79 461.79 0 0 0 327.78 135.75 461.94 461.94 0 0 0 327.78-135.75 462.3 462.3 0 0 0 135.75-327.75c0-62.55-12.24-123.27-36.42-180.42zM511.7 923.69c-228.09 0-413.67-185.55-413.67-413.64S283.61 96.41 511.7 96.41c228.06 0.03 413.64 185.58 413.64 413.64S739.79 923.69 511.7 923.69z m-42.69-589.41a42.66 42.66 0 0 0 85.32 0 42.66 42.66 0 0 0-85.32 0z m71.79 365.1a29.13 29.13 0 0 1-58.26 0v-227.67a29.13 29.13 0 0 1 58.26 0v227.67z"  ></path></symbol><symbol id="icon-loading" viewBox="0 0 1024 1024"><path d="M342.08 681.92c-15.84-15.84-40.8-15.84-56.64 0L172.16 795.2c-15.36 15.84-15.36 40.8 0 56.64 15.84 15.36 40.8 15.36 56.64 0l113.28-113.28c15.84-15.84 15.84-41.28 0-56.64z"  ></path><path d="M851.36 172.64c-15.84-15.84-40.8-15.84-56.64 0l-113.28 113.28c-15.36 15.84-15.36 40.8 0 56.64 15.84 15.36 40.8 15.36 56.64 0l113.28-113.28c15.84-15.84 15.84-41.28 0-56.64z"  ></path><path d="M342.08 342.08c15.84-15.84 15.84-40.8 0-56.64L229.28 172.64c-15.84-15.36-40.8-15.36-56.64 0-15.36 15.84-15.36 40.8 0 56.64l113.28 113.28c15.36 15.36 40.8 15.36 56.16-0.48z"  ></path><path d="M851.36 794.72l-113.28-113.28c-15.84-15.36-40.8-15.36-56.64 0-15.36 15.84-15.36 40.8 0 56.64l113.28 113.28c15.84 15.36 40.8 15.36 56.64 0 15.36-15.84 15.36-40.8 0-56.64z"  ></path><path d="M551.84 71.84c0-22.08-17.76-39.84-39.84-39.84-22.08 0-39.84 17.76-39.84 39.84v159.84c0 22.08 17.76 39.84 39.84 39.84 22.08 0 39.84-17.76 39.84-39.84V71.84z"  ></path><path d="M551.84 791.84c0-22.08-17.76-39.84-39.84-39.84-22.08 0-39.84 17.76-39.84 39.84v159.84c0 22.08 17.76 39.84 39.84 39.84 22.08 0 39.84-17.76 39.84-39.84v-159.84z"  ></path><path d="M791.84 551.84h159.84c22.08 0 39.84-17.76 39.84-39.84 0-22.08-17.76-39.84-39.84-39.84h-159.84c-22.08 0-39.84 17.76-39.84 39.84 0 22.08 17.76 39.84 39.84 39.84z"  ></path><path d="M232.16 472.16H71.84C49.76 472.16 32 489.92 32 512c0 22.08 17.76 39.84 39.84 39.84h159.84c22.08 0 39.84-17.76 39.84-39.84 0.48-22.08-17.28-39.84-39.36-39.84z"  ></path></symbol><symbol id="icon-right" viewBox="0 0 1024 1024"><path d="M729.53553953 512a43.3983399 43.3983399 0 0 1-12.73670591 30.75952455l-348.05686296 348.05686298a43.50710736 43.50710736 0 0 1-61.52992741-61.51905051L624.4985034 512l-317.29733702-317.29733702a43.50710736 43.50710736 0 1 1 61.52992739-61.51905051l348.05686297 348.05686298A43.36570926 43.36570926 0 0 1 729.53553953 512z"  ></path></symbol><symbol id="icon-left" viewBox="0 0 1024 1024"><path d="M294.46446047 512a43.3983399 43.3983399 0 0 1 12.73670591-30.75952455l348.05686296-348.05686298a43.50710736 43.50710736 0 0 1 61.52992741 61.51905051L399.5014966 512l317.29733702 317.29733702a43.50710736 43.50710736 0 1 1-61.52992739 61.51905051l-348.05686297-348.05686298A43.36570926 43.36570926 0 0 1 294.46446047 512z"  ></path></symbol></svg>';
    var script = function () {
        var scripts = document.getElementsByTagName("script");
        return scripts[scripts.length - 1]
    }();
    var shouldInjectCss = script.getAttribute("data-injectcss");
    var ready = function (fn) {
        if (document.addEventListener) {
            if (~["complete", "loaded", "interactive"].indexOf(document.readyState)) {
                setTimeout(fn, 0)
            } else {
                var loadFn = function () {
                    document.removeEventListener("DOMContentLoaded", loadFn, false);
                    fn()
                };
                document.addEventListener("DOMContentLoaded", loadFn, false)
            }
        } else if (document.attachEvent) {
            IEContentLoaded(window, fn)
        }
        function IEContentLoaded(w, fn) {
            var d = w.document,
                done = false,
                init = function () {
                    if (!done) {
                        done = true;
                        fn()
                    }
                };
            var polling = function () {
                try {
                    d.documentElement.doScroll("left")
                } catch (e) {
                    setTimeout(polling, 50);
                    return
                }
                init()
            };
            polling();
            d.onreadystatechange = function () {
                if (d.readyState == "complete") {
                    d.onreadystatechange = null;
                    init()
                }
            }
        }
    };
    var before = function (el, target) {
        target.parentNode.insertBefore(el, target)
    };
    var prepend = function (el, target) {
        if (target.firstChild) {
            before(el, target.firstChild)
        } else {
            target.appendChild(el)
        }
    };

    function appendSvg() {
        var div, svg;
        div = document.createElement("div");
        div.innerHTML = svgSprite;
        svgSprite = null;
        svg = div.getElementsByTagName("svg")[0];
        if (svg) {
            svg.setAttribute("aria-hidden", "true");
            svg.style.position = "absolute";
            svg.style.width = 0;
            svg.style.height = 0;
            svg.style.overflow = "hidden";
            prepend(svg, document.body)
        }
    }
    if (shouldInjectCss && !window.__iconfont__svg__cssinject__) {
        window.__iconfont__svg__cssinject__ = true;
        try {
            document.write(
                "<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>")
        } catch (e) {
            console && console.log(e)
        }
    }
    ready(appendSvg)
})(window)