import styled from '@emotion/styled';

const FlexBox = styled('div')({
  display: 'flex',
});

const CenteredFlexBox = styled(FlexBox)({
  justifyContent: 'center',
  alignItems: 'center',
});

const FullSizeCenteredFlexBox = styled(CenteredFlexBox)({
  width: '100%',
  height: '100%',
});

export { FlexBox, CenteredFlexBox, FullSizeCenteredFlexBox };
