import { Button, Image, Text } from 'blockchain-info-components'
import { checkForVulnerableAddressError } from 'services/ErrorCheckService'
import { FormattedMessage } from 'react-intl'
import React from 'react'
import styled from 'styled-components'

const ErrorContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`
const MessageText = styled(Text)`
  width: 80%;
  margin: 20px 0px;
`
const Error = ({ message, onArchive }) => {
  const vulnerableAddress = checkForVulnerableAddressError(message)
  if (!vulnerableAddress) return null
  return (
    <ErrorContainer>
      <Image name='empty-search' width='260px' />
      <MessageText size='18px' weight={400}>
        {message}
      </MessageText>
      <Button nature='primary' onClick={() => onArchive(vulnerableAddress)}>
        <Text size='16px' weight={400} color='white'>
          <FormattedMessage
            id='scenes.settings.addresses.btc.wallets.addresserror'
            defaultMessage='Archive Address'
          />
        </Text>
      </Button>
    </ErrorContainer>
  )
}
export default Error
