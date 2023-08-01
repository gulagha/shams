import {h, Component, Prop} from '@stencil/core';

@Component({
  tag: 'shams-icons',
  styleUrl: './shams-icons.css'
})
export class Icon {
  /**
   * Name of the icon
   */
  @Prop() name: string;

  private svgIcons = {
    'light-mode-icon':
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <path d="M11 1V3M11 19V21M3 11H1M5.31412 5.31412L3.8999 3.8999M16.6859 5.31412L18.1001 3.8999M5.31412 16.69L3.8999 18.1042M16.6859 16.69L18.1001 18.1042M21 11H19M16 11C16 13.7614 13.7614 16 11 16C8.23858 16 6 13.7614 6 11C6 8.23858 8.23858 6 11 6C13.7614 6 16 8.23858 16 11Z" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>,
    'dark-mode-icon':
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <path d="M20.9548 11.9115C19.5779 14.3267 16.9791 15.9552 14 15.9552C9.58172 15.9552 6 12.3734 6 7.95516C6 4.9758 7.62867 2.37683 10.0443 1C4.96975 1.48114 1 5.75444 1 10.9549C1 16.4778 5.47715 20.9549 11 20.9549C16.2002 20.9549 20.4733 16.9856 20.9548 11.9115Z" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>,
    'edit-icon':
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <path d="M16.5 8.82843L12.5 4.82843M1 20.3284L4.38437 19.9524C4.79786 19.9064 5.0046 19.8835 5.19785 19.8209C5.36929 19.7654 5.53245 19.687 5.68289 19.5878C5.85245 19.476 5.99955 19.3289 6.29373 19.0347L19.5 5.82843C20.6046 4.72386 20.6046 2.933 19.5 1.82843C18.3955 0.723859 16.6046 0.723857 15.5 1.82843L2.29373 15.0347C1.99955 15.3289 1.85246 15.476 1.74064 15.6455C1.64143 15.796 1.56301 15.9591 1.50751 16.1306C1.44496 16.3238 1.42198 16.5306 1.37604 16.9441L1 20.3284Z" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>,
    'share-icon':
      <svg width="20" height="22" viewBox="0 0 20 22" fill="none">
        <path d="M6.59 12.51L13.42 16.49M13.41 5.51L6.59 9.49M19 4C19 5.65685 17.6569 7 16 7C14.3431 7 13 5.65685 13 4C13 2.34315 14.3431 1 16 1C17.6569 1 19 2.34315 19 4ZM7 11C7 12.6569 5.65685 14 4 14C2.34315 14 1 12.6569 1 11C1 9.34315 2.34315 8 4 8C5.65685 8 7 9.34315 7 11ZM19 18C19 19.6569 17.6569 21 16 21C14.3431 21 13 19.6569 13 18C13 16.3431 14.3431 15 16 15C17.6569 15 19 16.3431 19 18Z" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>,
    'delete-icon':
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path d="M7 1H13M1 4H19M17 4L16.2987 14.5193C16.1935 16.0975 16.1409 16.8867 15.8 17.485C15.4999 18.0118 15.0472 18.4353 14.5017 18.6997C13.882 19 13.0911 19 11.5093 19H8.49065C6.90891 19 6.11803 19 5.49834 18.6997C4.95276 18.4353 4.50009 18.0118 4.19998 17.485C3.85911 16.8867 3.8065 16.0975 3.70129 14.5193L3 4M8 8.5V13.5M12 8.5V13.5" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>,
    'plus-icon':
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
        <path d="M8 1V15M1 8H15" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>,
    'cancel-icon':
      <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
        <path d="M11 1L1 11M1 1L11 11" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>,
    'checked-icon':
      <svg width="18" height="13" viewBox="0 0 18 13" fill="none">
        <path d="M17 1L6 12L1 7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>,
    'save-icon':
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path d="M13 6H6.6C6.03995 6 5.75992 6 5.54601 5.89101C5.35785 5.79513 5.20487 5.64215 5.10899 5.45399C5 5.24008 5 4.96005 5 4.4V1M15 19V12.6C15 12.0399 15 11.7599 14.891 11.546C14.7951 11.3578 14.6422 11.2049 14.454 11.109C14.2401 11 13.9601 11 13.4 11H6.6C6.03995 11 5.75992 11 5.54601 11.109C5.35785 11.2049 5.20487 11.3578 5.10899 11.546C5 11.7599 5 12.0399 5 12.6V19M19 7.32548V14.2C19 15.8802 19 16.7202 18.673 17.362C18.3854 17.9265 17.9265 18.3854 17.362 18.673C16.7202 19 15.8802 19 14.2 19H5.8C4.11984 19 3.27976 19 2.63803 18.673C2.07354 18.3854 1.6146 17.9265 1.32698 17.362C1 16.7202 1 15.8802 1 14.2V5.8C1 4.11984 1 3.27976 1.32698 2.63803C1.6146 2.07354 2.07354 1.6146 2.63803 1.32698C3.27976 1 4.11984 1 5.8 1H12.6745C13.1637 1 13.4083 1 13.6385 1.05526C13.8425 1.10425 14.0376 1.18506 14.2166 1.29472C14.4184 1.4184 14.5914 1.59135 14.9373 1.93726L18.0627 5.06274C18.4086 5.40865 18.5816 5.5816 18.7053 5.78343C18.8149 5.96237 18.8957 6.15746 18.9447 6.36154C19 6.59171 19 6.8363 19 7.32548Z" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>,
    'clock-icon':
      <svg width="22" height="20" viewBox="0 0 22 20" fill="none">
        <path d="M4 1L1 4M21 4L18 1M5 17L3 19M17 17L19 19M11 7V11L13 13M11 19C13.1217 19 15.1566 18.1571 16.6569 16.6569C18.1571 15.1566 19 13.1217 19 11C19 8.87827 18.1571 6.84344 16.6569 5.34315C15.1566 3.84285 13.1217 3 11 3C8.87827 3 6.84344 3.84285 5.34315 5.34315C3.84285 6.84344 3 8.87827 3 11C3 13.1217 3.84285 15.1566 5.34315 16.6569C6.84344 18.1571 8.87827 19 11 19Z" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>,
    'exit-icon':
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path d="M14 14.6175L19 9.6175M19 9.6175L14 4.6175M19 9.6175H7M10 14.6175C10 14.9131 10 15.0609 9.98901 15.1889C9.87482 16.5195 8.89486 17.6143 7.58503 17.8748C7.45903 17.8998 7.31202 17.9162 7.01835 17.9488L5.99694 18.0623C4.46248 18.2328 3.69521 18.318 3.08566 18.123C2.27293 17.8629 1.60942 17.269 1.26118 16.49C1 15.9057 1 15.1337 1 13.5898V5.64519C1 4.10126 1 3.32929 1.26118 2.74501C1.60942 1.96597 2.27293 1.3721 3.08566 1.11202C3.69521 0.916963 4.46246 1.00221 5.99694 1.17271L7.01835 1.2862C7.31212 1.31884 7.45901 1.33516 7.58503 1.36022C8.89486 1.62065 9.87482 2.71553 9.98901 4.0461C10 4.17413 10 4.32192 10 4.6175" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>,
    'enter-icon':
      <svg width="20" height="22" viewBox="0 0 20 22" fill="none">
        <path d="M4 16C4 16.3513 4 16.5269 4.01567 16.6796C4.14575 17.9474 5.0626 18.9946 6.30206 19.2911C6.45134 19.3268 6.6255 19.35 6.97368 19.3965L13.5656 20.2754C15.442 20.5256 16.3803 20.6507 17.1084 20.3611C17.7478 20.1069 18.2803 19.6407 18.6168 19.0406C19 18.357 19 17.4105 19 15.5175V6.48244C19 4.5894 19 3.64288 18.6168 2.95935C18.2803 2.35923 17.7478 1.893 17.1084 1.6388C16.3803 1.34926 15.442 1.47435 13.5656 1.72455L6.97368 2.60347C6.62546 2.6499 6.45135 2.67311 6.30206 2.70883C5.0626 3.00532 4.14575 4.05254 4.01567 5.3203C4 5.47301 4 5.64866 4 5.99996M10 6.99996L14 11M14 11L10 15M14 11H1" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>,
    'pause-icon':
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <path d="M8.5 14V8M13.5 14V8M21 11C21 16.5228 16.5228 21 11 21C5.47715 21 1 16.5228 1 11C1 5.47715 5.47715 1 11 1C16.5228 1 21 5.47715 21 11Z" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>,
    'play-icon':
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <path d="M11 21C16.5228 21 21 16.5228 21 11C21 5.47715 16.5228 1 11 1C5.47715 1 1 5.47715 1 11C1 16.5228 5.47715 21 11 21Z" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M8.5 7.96533C8.5 7.48805 8.5 7.24941 8.59974 7.11618C8.68666 7.00007 8.81971 6.92744 8.96438 6.9171C9.13038 6.90525 9.33112 7.03429 9.73261 7.29239L14.4532 10.3271C14.8016 10.551 14.9758 10.663 15.0359 10.8054C15.0885 10.9298 15.0885 11.0702 15.0359 11.1946C14.9758 11.337 14.8016 11.449 14.4532 11.6729L9.73261 14.7076C9.33112 14.9657 9.13038 15.0948 8.96438 15.0829C8.81971 15.0726 8.68666 14.9999 8.59974 14.8838C8.5 14.7506 8.5 14.512 8.5 14.0347V7.96533Z" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>,
    'magic-icon':
      <svg width="21" height="21" viewBox="0 0 21 21" fill="none">
        <path d="M13 3V1M13 15V13M6 8H8M18 8H20M15.8 10.8L17 12M15.8 5.2L17 4M1 20L10 11M10.2 5.2L9 4" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>,
    'settings-icon':
      <svg width="20" height="22" viewBox="0 0 20 22" fill="none">
        <path d="M7.35012 18.3711L7.93457 19.6856C8.1083 20.0768 8.39184 20.4093 8.75079 20.6426C9.10974 20.8759 9.52867 21.0001 9.95679 21C10.3849 21.0001 10.8038 20.8759 11.1628 20.6426C11.5217 20.4093 11.8053 20.0768 11.979 19.6856L12.5635 18.3711C12.7715 17.9047 13.1215 17.5159 13.5635 17.26C14.0082 17.0034 14.5228 16.8941 15.0335 16.9478L16.4635 17.1C16.8891 17.145 17.3187 17.0656 17.7001 16.8713C18.0816 16.6771 18.3984 16.3763 18.6123 16.0056C18.8265 15.635 18.9286 15.2103 18.9061 14.7829C18.8836 14.3555 18.7376 13.9438 18.4857 13.5978L17.639 12.4344C17.3375 12.0171 17.1764 11.5148 17.179 11C17.1789 10.4866 17.3415 9.98635 17.6435 9.57111L18.4901 8.40778C18.742 8.06175 18.888 7.65007 18.9105 7.22267C18.933 6.79528 18.831 6.37054 18.6168 6C18.4029 5.62923 18.086 5.32849 17.7046 5.13423C17.3232 4.93997 16.8936 4.86053 16.4679 4.90556L15.0379 5.05778C14.5272 5.11141 14.0127 5.00212 13.5679 4.74556C13.125 4.48825 12.775 4.09736 12.5679 3.62889L11.979 2.31444C11.8053 1.92317 11.5217 1.59072 11.1628 1.3574C10.8038 1.12408 10.3849 0.99993 9.95679 1C9.52867 0.99993 9.10974 1.12408 8.75079 1.3574C8.39184 1.59072 8.1083 1.92317 7.93457 2.31444L7.35012 3.62889C7.14305 4.09736 6.79299 4.48825 6.35012 4.74556C5.90534 5.00212 5.39079 5.11141 4.88012 5.05778L3.44568 4.90556C3.02001 4.86053 2.59042 4.93997 2.20899 5.13423C1.82757 5.32849 1.51069 5.62923 1.29679 6C1.08261 6.37054 0.98057 6.79528 1.00305 7.22267C1.02554 7.65007 1.17158 8.06175 1.42345 8.40778L2.27012 9.57111C2.57206 9.98635 2.73466 10.4866 2.73456 11C2.73466 11.5134 2.57206 12.0137 2.27012 12.4289L1.42345 13.5922C1.17158 13.9382 1.02554 14.3499 1.00305 14.7773C0.98057 15.2047 1.08261 15.6295 1.29679 16C1.5109 16.3706 1.82782 16.6712 2.20918 16.8654C2.59055 17.0596 3.02004 17.1392 3.44568 17.0944L4.87568 16.9422C5.38634 16.8886 5.90089 16.9979 6.34568 17.2544C6.7902 17.511 7.14188 17.902 7.35012 18.3711Z" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M9.955 14C11.6119 14 12.955 12.6569 12.955 11C12.955 9.34315 11.6119 8 9.955 8C8.29815 8 6.955 9.34315 6.955 11C6.955 12.6569 8.29815 14 9.955 14Z" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
  };

  render() {
    return this.svgIcons[this.name] || null;
  }
}
