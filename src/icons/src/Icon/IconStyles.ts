import styled from '@emotion/styled';

export const StyledSpan = styled.span<{
  $width: string;
  $height: string;
  $icon: string;
  $ignoreSize?: boolean;
}>`
  width: ${(props) => (props.$ignoreSize ? null : props.$width)};
  height: ${(props) => (props.$ignoreSize ? null : props.$height)};
  display: inline-block;
  mask-repeat: no-repeat;
  mask-size: 100%;
  mask-position: center;
  -webkit-mask-repeat: no-repeat;
  -webkit-mask-size: 100%;
  -webkit-mask-position: center;
  background-color: currentColor; /* Inherit color from parent */
  vertical-align: middle;
  mask-image: url(${(props) => props.$icon});
  -webkit-mask-image: url(${(props) => props.$icon});
`;
