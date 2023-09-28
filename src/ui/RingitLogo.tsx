export interface RingITLogoProps extends React.HTMLProps<HTMLOrSVGElement> {}

function RingITLogo({ className }: RingITLogoProps) {
  return (
    <svg viewBox="0 0 104 67" fill="none" className={className}>
      <path
        d="M103.999 0h-19.38c-4.64 0-7.552.411-10.479 2.539-4.212 3.064-4.409 8.282-4.409 11.502 0 18.281 12.046 21.428 18.806 23.12 1.016.252 2.42.603 3.294.922v16.743H83.22c.767-4.084 2.104-9.638 4.37-15.316l-11.366-4.432c-5.645 14.236-6.333 26.329-6.647 31.918L104 67V0h-.001zM91.83 25.434c-.098-.024-.192-.049-.287-.071-6.314-1.575-10.126-2.525-10.126-11.357 0-.694.015-1.24.037-1.67a79.082 79.082 0 0 1 2.987-.028l7.389.027v13.1zM27.77 24.382c3.557-3.496 6.044-7.482 6.044-11.709C33.813 0 23.765 0 20.463 0H0v12.308l21.507-.02.002.455C16.43 20.383 8.572 24.61 0 26.746v40.248l12.168-.14V34.672a69.757 69.757 0 0 0 5.32-2.81c1.322.846 4.302 3.313 4.302 6.004v28.99h12.452V37.868c0-6.201-3.458-10.723-6.472-13.487zM45.561.84h-9.055v31.468h9.055V.84zM52.083.84h-4.54v31.468h9.055V12.73c1.386.922 2.547 2.426 2.547 4.873v14.705H68.2V16.172C68.2 5.596 58.775.84 52.083.84zM62.116 34.266H50.09v5.875h-1.98v-5.875H36.505v32.589h11.602V50.63h1.987c.276 10.012 6.65 16.224 16.402 16.224h.996V55.246h-1.058c-1.762-.059-4.138-.071-4.354-4.616h5.553V40.14h-5.518v-5.874z"
        fill="#EB2917"
      ></path>
    </svg>
  );
}

export { RingITLogo };
