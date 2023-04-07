import React from "react";

export enum iconType {
    arrowRight = "arrowRight",
    chevronDown = "chevronDown",
    imageHero = "imageHero",
    login = "login",
    play = "play",
    heart = "heart",
    share = "share",
    search = "search",
    arrowLink = "arrowLink",
    cancel = "cancel",
    menu = "menu",
}

const icons = {
    arrowRight: (
        <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="none" viewBox="0 0 22 20">
            <path
                fill="current"
                d="M1.667 11.333H17.48l-4.84 5.814a1.335 1.335 0 0 0 2.053 1.706l6.667-8a1.6 1.6 0 0 0 .12-.2c0-.066 0-.106.093-.173a1.33 1.33 0 0 0 .094-.48 1.33 1.33 0 0 0-.094-.48c0-.067 0-.107-.093-.173a1.6 1.6 0 0 0-.12-.2l-6.667-8a1.332 1.332 0 0 0-1.026-.48 1.333 1.333 0 0 0-1.027 2.186l4.84 5.814H1.667a1.333 1.333 0 1 0 0 2.666Z"
            />
        </svg>
    ),
    arrowLink: (
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M3.98382 4.74747L4.77142 15.886C4.77773 15.9712 4.81404 16.0517 4.87559 16.1133L6.27244 17.5101C6.38924 17.6269 6.58812 17.5354 6.57549 17.3712L5.84629 7.04557L15.0829 16.2821C15.1523 16.3516 15.266 16.3516 15.3354 16.2821L16.2824 15.3351C16.3519 15.2657 16.3519 15.152 16.2824 15.0826L7.04742 5.84759L17.3731 6.57679C17.5388 6.58784 17.6288 6.39054 17.512 6.27375L16.0678 4.82954C16.0378 4.79955 15.9967 4.78061 15.9541 4.77904L4.74774 3.98354C4.64559 3.97641 4.54309 3.99129 4.44718 4.02716C4.35126 4.06303 4.26416 4.11906 4.19175 4.19147C4.11934 4.26388 4.06331 4.35099 4.02744 4.4469C3.99156 4.54282 3.97669 4.64531 3.98382 4.74747Z"
                fill="#F4F4F4"
            />
        </svg>
    ),

    chevronDown: (
        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M10.9822 2.57144H9.97778C9.90948 2.57144 9.84519 2.60492 9.80501 2.65983L6.0001 7.90448L2.19519 2.65983C2.15501 2.60492 2.09072 2.57144 2.02242 2.57144H1.01796C0.930903 2.57144 0.880011 2.67055 0.930903 2.74153L5.65322 9.2518C5.82465 9.48751 6.17555 9.48751 6.34564 9.2518L11.068 2.74153C11.1202 2.67055 11.0693 2.57144 10.9822 2.57144Z"
                fill="#F4F4F4"
            />
        </svg>
    ),

    imageHero: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="#1584BC" viewBox="0 0 200 200">
            <defs>
                <clipPath id="a">
                    <rect width="60%" height="100%" />
                </clipPath>
                <clipPath id="b">
                    <rect width="40%" height="100%" x="60%" />
                </clipPath>
            </defs>
            <path fill="#0512FF" d="M159.5 48 41 88.5l7.5 60 111 4V48Z" clipPath="url(#a)" transform="translate(-8 -10)" />
            <path d="M159.5 48 41 88.5l7.5 60 111 4V48Z" clipPath="url(#b)" />
        </svg>
    ),

    login: (
        <svg width="24" height="24" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M20 40C31.0457 40 40 31.0457 40 20C40 8.9543 31.0457 0 20 0C8.9543 0 0 8.9543 0 20C0 31.0457 8.9543 40 20 40ZM23.8085 17.5549C22.6812 18.3081 21.3558 18.7101 20 18.7101C18.1819 18.7101 16.4383 17.9879 15.1527 16.7023C13.8672 15.4168 13.1449 13.6732 13.1449 11.8551C13.1449 10.4993 13.547 9.17391 14.3002 8.0466C15.0535 6.91929 16.1241 6.04066 17.3767 5.52181C18.6293 5.00297 20.0076 4.86722 21.3374 5.13172C22.6671 5.39623 23.8886 6.04911 24.8473 7.00781C25.806 7.96651 26.4589 9.18796 26.7234 10.5177C26.9879 11.8475 26.8521 13.2258 26.3333 14.4784C25.8144 15.731 24.9358 16.8016 23.8085 17.5549ZM20 21C13.9249 21 9 25.9249 9 32V32.4286C9 32.7442 9.25584 33 9.57143 33H30.4286C30.7442 33 31 32.7442 31 32.4286V32C31 25.9249 26.0751 21 20 21Z"
                fill="#f4f4f4"
            />
        </svg>
    ),

    play: (
        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
            <path
                fill="#000"
                d="M16 0C7.164 0 0 7.164 0 16s7.164 16 16 16 16-7.164 16-16S24.836 0 16 0Zm5.146 16.246-7.8 5.675a.285.285 0 0 1-.41-.082.285.285 0 0 1-.043-.15V10.346a.285.285 0 0 1 .453-.232l7.8 5.672a.283.283 0 0 1 0 .46Z"
            />
        </svg>
    ),

    share: (
        <svg xmlns="http://www.w3.org/2000/svg" width="19" height="20" viewBox="0 0 19 20" fill="none">
            <path
                d="M15.3061 13.8776C14.5791 13.8776 13.9082 14.1327 13.3827 14.5587L8.09694 10.7347C8.18545 10.2489 8.18545 9.7511 8.09694 9.26531L13.3827 5.44133C13.9082 5.86735 14.5791 6.12245 15.3061 6.12245C16.9949 6.12245 18.3673 4.75 18.3673 3.06122C18.3673 1.37245 16.9949 0 15.3061 0C13.6173 0 12.2449 1.37245 12.2449 3.06122C12.2449 3.35714 12.2857 3.64031 12.3648 3.91071L7.34439 7.54592C6.59949 6.55867 5.41582 5.91837 4.08163 5.91837C1.82653 5.91837 0 7.7449 0 10C0 12.2551 1.82653 14.0816 4.08163 14.0816C5.41582 14.0816 6.59949 13.4413 7.34439 12.4541L12.3648 16.0893C12.2857 16.3597 12.2449 16.6454 12.2449 16.9388C12.2449 18.6276 13.6173 20 15.3061 20C16.9949 20 18.3673 18.6276 18.3673 16.9388C18.3673 15.25 16.9949 13.8776 15.3061 13.8776ZM15.3061 1.73469C16.0383 1.73469 16.6327 2.32908 16.6327 3.06122C16.6327 3.79337 16.0383 4.38776 15.3061 4.38776C14.574 4.38776 13.9796 3.79337 13.9796 3.06122C13.9796 2.32908 14.574 1.73469 15.3061 1.73469ZM4.08163 12.2449C2.84439 12.2449 1.83673 11.2372 1.83673 10C1.83673 8.76276 2.84439 7.7551 4.08163 7.7551C5.31888 7.7551 6.32653 8.76276 6.32653 10C6.32653 11.2372 5.31888 12.2449 4.08163 12.2449ZM15.3061 18.2653C14.574 18.2653 13.9796 17.6709 13.9796 16.9388C13.9796 16.2066 14.574 15.6122 15.3061 15.6122C16.0383 15.6122 16.6327 16.2066 16.6327 16.9388C16.6327 17.6709 16.0383 18.2653 15.3061 18.2653Z"
                fill="white"
            />
        </svg>
    ),

    search: (
        <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M21.6499 19.8884L14.6937 12.9321C15.7731 11.5366 16.3571 9.83036 16.3571 8.03571C16.3571 5.8875 15.5187 3.87321 14.0026 2.35446C12.4865 0.835714 10.4669 0 8.32136 0C6.17582 0 4.15618 0.838393 2.64011 2.35446C1.12136 3.87054 0.285645 5.8875 0.285645 8.03571C0.285645 10.1812 1.12404 12.2009 2.64011 13.717C4.15618 15.2357 6.17314 16.0714 8.32136 16.0714C10.116 16.0714 11.8196 15.4875 13.2151 14.4107L20.1714 21.3643C20.1918 21.3847 20.216 21.4009 20.2426 21.4119C20.2693 21.423 20.2979 21.4287 20.3267 21.4287C20.3556 21.4287 20.3841 21.423 20.4108 21.4119C20.4375 21.4009 20.4617 21.3847 20.4821 21.3643L21.6499 20.1991C21.6703 20.1787 21.6865 20.1545 21.6976 20.1278C21.7086 20.1012 21.7143 20.0726 21.7143 20.0438C21.7143 20.0149 21.7086 19.9863 21.6976 19.9597C21.6865 19.933 21.6703 19.9088 21.6499 19.8884ZM12.5642 12.2786C11.4285 13.4116 9.92314 14.0357 8.32136 14.0357C6.71957 14.0357 5.21422 13.4116 4.0785 12.2786C2.94547 11.1429 2.32136 9.6375 2.32136 8.03571C2.32136 6.43393 2.94547 4.92589 4.0785 3.79286C5.21422 2.65982 6.71957 2.03571 8.32136 2.03571C9.92314 2.03571 11.4312 2.65714 12.5642 3.79286C13.6973 4.92857 14.3214 6.43393 14.3214 8.03571C14.3214 9.6375 13.6973 11.1455 12.5642 12.2786Z"
                fill="#F4F4F4"
            />
        </svg>
    ),

    cancel: (
        <svg width="20" height="20" viewBox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M17.8499 16L27.2249 4.82504C27.3821 4.63932 27.2499 4.35718 27.0071 4.35718H24.1571C23.9892 4.35718 23.8285 4.43218 23.7178 4.56075L15.9857 13.7786L8.25351 4.56075C8.14637 4.43218 7.98565 4.35718 7.81422 4.35718H4.96422C4.72137 4.35718 4.58922 4.63932 4.74637 4.82504L14.1214 16L4.74637 27.175C4.71116 27.2164 4.68858 27.2671 4.6813 27.3209C4.67401 27.3748 4.68233 27.4296 4.70527 27.4788C4.72821 27.5281 4.7648 27.5697 4.8107 27.5988C4.8566 27.6279 4.90989 27.6432 4.96422 27.6429H7.81422C7.98208 27.6429 8.1428 27.5679 8.25351 27.4393L15.9857 18.2215L23.7178 27.4393C23.8249 27.5679 23.9857 27.6429 24.1571 27.6429H27.0071C27.2499 27.6429 27.3821 27.3608 27.2249 27.175L17.8499 16Z"
                fill="#f4f4f4"
            />
        </svg>
    ),
    heart: (
        <svg xmlns="http://www.w3.org/2000/svg" width="23" height="20" viewBox="0 0 23 20" fill="none">
            <path
                d="M21.785 4.0986C21.4386 3.29655 20.9392 2.56975 20.3146 1.95886C19.6896 1.34616 18.9526 0.85925 18.1439 0.524616C17.3052 0.176245 16.4057 -0.002072 15.4976 1.81642e-05C14.2236 1.81642e-05 12.9806 0.348889 11.9004 1.00787C11.6419 1.1655 11.3964 1.33865 11.1639 1.5273C10.9313 1.33865 10.6858 1.1655 10.4274 1.00787C9.34715 0.348889 8.10414 1.81642e-05 6.83011 1.81642e-05C5.91271 1.81642e-05 5.02374 0.175746 4.18386 0.524616C3.37242 0.860566 2.64108 1.34382 2.01311 1.95886C1.38772 2.56906 0.888142 3.29604 0.542688 4.0986C0.18348 4.93331 0 5.8197 0 6.73193C0 7.59248 0.175728 8.4892 0.524598 9.40144C0.816616 10.1638 1.23526 10.9546 1.7702 11.7531C2.61782 13.0168 3.78331 14.3347 5.23048 15.6708C7.62864 17.8855 10.0035 19.4153 10.1043 19.4773L10.7168 19.8701C10.9881 20.0433 11.337 20.0433 11.6083 19.8701L12.2208 19.4773C12.3216 19.4127 14.6939 17.8855 17.0947 15.6708C18.5418 14.3347 19.7073 13.0168 20.5549 11.7531C21.0899 10.9546 21.5111 10.1638 21.8005 9.40144C22.1494 8.4892 22.3251 7.59248 22.3251 6.73193C22.3277 5.8197 22.1442 4.93331 21.785 4.0986ZM11.1639 17.826C11.1639 17.826 1.96401 11.9314 1.96401 6.73193C1.96401 4.0986 4.14252 1.96403 6.83011 1.96403C8.71918 1.96403 10.3576 3.0184 11.1639 4.5586C11.9701 3.0184 13.6085 1.96403 15.4976 1.96403C18.1852 1.96403 20.3637 4.0986 20.3637 6.73193C20.3637 11.9314 11.1639 17.826 11.1639 17.826Z"
                fill="#F9AACA"
            />
        </svg>
    ),
    menu: (
        <svg xmlns="http://www.w3.org/2000/svg" width="29" height="26" viewBox="0 0 30 26" fill="none">
            <path
                fill="#000"
                d="M29 .357H11.286A.287.287 0 0 0 11 .643v2c0 .157.129.286.286.286H29a.287.287 0 0 0 .286-.286v-2A.287.287 0 0 0 29 .357ZM29 15.5H11.286a.287.287 0 0 0-.286.286v2c0 .157.129.285.286.285H29a.287.287 0 0 0 .286-.285v-2A.287.287 0 0 0 29 15.5Zm0 7.572H1a.287.287 0 0 0-.286.285v2c0 .157.129.286.286.286h28a.287.287 0 0 0 .286-.286v-2a.287.287 0 0 0-.286-.285Zm0-15.143H1a.287.287 0 0 0-.286.285v2c0 .157.129.286.286.286h28a.287.287 0 0 0 .286-.286v-2A.287.287 0 0 0 29 7.93Z"
            />
        </svg>
    ),
};

export default icons;