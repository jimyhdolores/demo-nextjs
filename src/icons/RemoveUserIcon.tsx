interface Props {
  width?: string;
  height?: string;
  color?: string;
}
const RemoveUserIcon = ({ width = '18', height = '15', color = '#5A5A5A' }: Props) => {
  return (
    <svg width={width} height={height} viewBox='0 0 18 15' fill='none'>
      <path
        d='M12.5 6.72542V5.05876H17.5V6.72542H12.5ZM6.66667 7.55876C5.75 7.55876 4.96528 7.23237 4.3125 6.57959C3.65972 5.92681 3.33333 5.14209 3.33333 4.22542C3.33333 3.30876 3.65972 2.52403 4.3125 1.87126C4.96528 1.21848 5.75 0.89209 6.66667 0.89209C7.58333 0.89209 8.36806 1.21848 9.02083 1.87126C9.67361 2.52403 10 3.30876 10 4.22542C10 5.14209 9.67361 5.92681 9.02083 6.57959C8.36806 7.23237 7.58333 7.55876 6.66667 7.55876ZM0 14.2254V11.8921C0 11.4199 0.121667 10.9857 0.365 10.5896C0.608333 10.1935 0.931111 9.89153 1.33333 9.68376C2.19444 9.2532 3.06944 8.93015 3.95833 8.71459C4.84722 8.49903 5.75 8.39153 6.66667 8.39209C7.58333 8.39209 8.48611 8.49987 9.375 8.71542C10.2639 8.93098 11.1389 9.25376 12 9.68376C12.4028 9.89209 12.7258 10.1943 12.9692 10.5904C13.2125 10.9865 13.3339 11.4204 13.3333 11.8921V14.2254H0Z'
        fill={color}
      />
    </svg>
  );
};
export default RemoveUserIcon;