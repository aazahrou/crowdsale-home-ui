import React from 'react'
import style from './style.scss'
import Header from '../../Components/Header'
import { LanguageContext } from '../../Components/SwitcherLang/'
import {
  Intro,
  Description,
  Tokens,
  Apps,
  Team,
  Faq,
  Contact
} from './Sections'

import { EthereumProvider } from './Utils/EthereumProvider'
import {
  abi as CrowdsaleABI,
  networks as CrowdsaleNetworks
} from './contracts/Karbon14Crowdsale.json'
import {
  abi as TokenABI,
  networks as TokenNetworks
} from './contracts/Karbon14Token.json'

const Karbon = () => (
  <LanguageContext.Consumer>
    {({ getTranslation }) => (
      <EthereumProvider
        contracts={[
          {
            name: 'Karbon14Token',
            ABI: TokenABI,
            address: TokenNetworks[process.env.NETWORK].address
          },
          {
            name: 'Karbon14Crowdsale',
            ABI: CrowdsaleABI,
            address: CrowdsaleNetworks[process.env.NETWORK].address
          }
        ]}
      >
        {({ deployedContracts = {}, web3 }) => (
          <div className="karbon">
            <Header
              getTranslation={getTranslation}
              sections={[
                'description',
                'tokens',
                'apps',
                'team',
                'faq',
                'contact',
                'subscribe'
              ]}
            />
            <Intro
              getTranslation={getTranslation}
              history={history}
              deployedContracts={deployedContracts}
              web3={web3}
            />
            <Description getTranslation={getTranslation} />
            <Tokens getTranslation={getTranslation} />
            <Apps getTranslation={getTranslation} />
            <Team getTranslation={getTranslation} />
            <Faq getTranslation={getTranslation} />
            <Contact getTranslation={getTranslation} />
            <style jsx>{style}</style>
          </div>
        )}
      </EthereumProvider>
    )}
  </LanguageContext.Consumer>
)

export { Karbon }
