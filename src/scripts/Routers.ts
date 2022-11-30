export interface IRouter {
  name: string;
  shortname?: string;
  address: string;
  base: string;
  logoURI?: string;
}

export interface IRouters {
  [keys: number]: IRouter[];
}

export const Routers: IRouters = {
  1: [
    {
      name: 'RBXchange ETH',
      address: '0x30c7BF97A07A87aD5ca3928217D9df8E399Def23',
      base: '0x79C41144F9A6592aF1EC01F7B792a01007c79C33',
      logoURI: '/images/rbx.png',
    },
    {
      name: 'Uniswap v2',
      address: '0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D',
      base: '0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2',
      logoURI: '/images/dex/UniswapV2.png',
    },
    {
      name: 'Sushiswap',
      address: '0x1b02dA8Cb0d097eB8D57A175b88c7D8b47997506',
      base: '0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2',
      logoURI: '/images/dex/Sushiswap.png',
    },
    {
      name: 'RadioShack ETH',
      address: '0x3e445e3280C5747a188DB8d0aB7762838A50E4ff',
      base: '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2',
      logoURI: '/images/dex/RadioShack.png',
    },
    {
      name: 'Empire ETH',
      address: '0xe7A504316BebbE540496E29798187c9ECAD6ef4F',
      base: '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2',
    },
  ],
  4: [
    {
      name: 'Uniswap v2 Rinkeby',
      address: '0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D',
      base: '0xc778417E063141139Fce010982780140Aa0cD5Ab',
    },
  ],
  5: [
    {
      name: 'Uniswap v2 Goerli',
      address: '0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D',
      base: '0xb4fbf271143f4fbf7b91a5ded31805e42b2208d6',
    },
  ],
  3: [
    {
      name: 'Uniswap v2 Ropsten',
      address: '0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D',
      base: '0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2',
    },
  ],
  10: [
    {
      name: 'ZipSwap Optimism',
      address: '0xE6Df0BB08e5A97b40B21950a0A51b94c4DbA0Ff6',
      base: '0x4200000000000000000000000000000000000006',
      logoURI: '/images/dex/ZipSwap.png',
    },
  ],
  20: [
    {
      name: 'ElkSwap Elastos',
      address: '0xbF9Bebfd6954985E41Fed497a5421B3B5B0f66AB',
      base: '0x517e9e5d46c1ea8ab6f78677d6114ef47f71f6c4',
      logoURI: '/images/dex/ElkFinance.png',
    },
    {
      name: 'Glide Finance',
      address: '0xec2f2b94465Ee0a7436beB4E38FC8Cf631ECf7DF',
      base: '0x517E9e5d46C1EA8aB6f78677d6114Ef47F71f6c4',
      logoURI: '/images/dex/ElkFinance.png',
    },
  ],
  42: [
    {
      name: 'Uniswap v2 Kovan',
      address: '0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D',
      base: '0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2',
    },
  ],
  4689: [
    {
      name: 'Mimo Swap',
      address: '0x95cB18889B968AbABb9104f30aF5b310bD007Fd8',
      base: '0xA00744882684C3e4747faEFD68D283eA44099D03',
      logoURI: '/images/dex/MimoSwap.png',
    },
    {
      name: 'Elk Finance ioTeX',
      address: '0xaeb801ba5cf1233b2a3765890d4f8f8c8141fa43',
      base: '0xa00744882684c3e4747faefd68d283ea44099d03',
      logoURI: '/images/dex/ElkFinance.png',
    },
  ],
  1313161554: [
    {
      name: 'TriSolaris',
      address: '0x2CB45Edb4517d5947aFdE3BEAbF95A582506858B',
      base: '0xC9BdeEd33CD01541e1eeD10f90519d2C06Fe3feB',
      logoURI: '/images/dex/TriSolaris.png',
    },
    {
      name: 'WannaSwap Aurora',
      address: '0x8f1E0Cf0f9f269Bc977C38635E560aa5b0E63323',
      base: '0xC9BdeEd33CD01541e1eeD10f90519d2C06Fe3feB',
      logoURI: '/images/dex/WannaSwap.png',
    },
    {
      name: 'AuroraSwap',
      address: '0xA1B1742e9c32C7cAa9726d8204bD5715e3419861',
      base: '0xC9BdeEd33CD01541e1eeD10f90519d2C06Fe3feB',
      logoURI: '/images/dex/AuroraSwap.png',
    },
    {
      name: 'Amaterasu Aurora',
      address: '0x3d99B2F578d94f61adcD899DE55F2991522cefE1',
      base: '0xC9BdeEd33CD01541e1eeD10f90519d2C06Fe3feB',
      logoURI: '/images/dex/Ameratsu.png',
    },
  ],
  106: [
    {
      name: 'WagyuSwap',
      address: '0x3D1c58B6d4501E34DF37Cf0f664A58059a188F00',
      base: '0xc579D1f3CF86749E05CD06f7ADe17856c2CE3126',
      logoURI: '/images/dex/WagyuSwap.png',
    },
  ],
  122: [
    {
      name: 'ElkSwap Fuse',
      address: '0x9a5De8C973c2f64f0f518DE581BcC2aa2dF8A621',
      base: '0x0be9e53fd7edac9f859882afdda116645287c629',
      logoURI: '/images/dex/ElkFinance.png',
    },
    {
      name: 'SushiSwap Fuse',
      address: '0xF4d73326C13a4Fc5FD7A064217e12780e9Bd62c3',
      base: '0x0be9e53fd7edac9f859882afdda116645287c629',
      logoURI: '/images/dex/Sushiswap.png',
    },
    {
      name: 'Voltage',
      address: '0xE3F85aAd0c8DD7337427B9dF5d0fB741d65EEEB5',
      base: '0x0be9e53fd7edac9f859882afdda116645287c629',
      logoURI: '/images/dex/Voltage.png',
    },
  ],
  97: [
    {
      name: 'PCS TESTNET',
      address: '0xd99d1c33f9fc3444f8101754abc46c52416550d1',
      base: '0xae13d989daC2f0dEbFf460aC112a837C89BAa7cd',
    },
  ],
  56: [
    {
      name: 'RBXchange BSC',
      address: '0x614B2aF13E315A1A6B301DE2fcba0Ab9C0b80a54',
      base: '0x1aa35dBa964E4efaAE7A0C40959dd01b7092CbF9',
      logoURI: '/images/rbx.png',
    },
    {
      name: 'PancakeSwap v2',
      address: '0x10ED43C718714eb63d5aA57B78B54704E256024E',
      base: '0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c',
      logoURI: '/images/dex/Pancakeswap.png',
    },
    {
      name: 'SushiSwap BSC',
      address: '0x1b02dA8Cb0d097eB8D57A175b88c7D8b47997506',
      base: '0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c',
      logoURI: '/images/dex/Sushiswap.png',
    },
    {
      name: 'PancakeSwap v1',
      address: '0x05fF2B0DB69458A0750badebc4f9e13aDd608C7F',
      base: '0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c',
      logoURI: '/images/dex/PCSv1.png',
    },
    {
      name: 'ElkSwap BSC',
      address: '0xA63B831264183D755756ca9AE5190fF5183d65D6',
      base: '0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c',
      logoURI: '/images/dex/ElkFinance.png',
    },
    {
      name: 'KnightSwap BSC',
      address: '0x05E61E0cDcD2170a76F9568a110CEe3AFdD6c46f',
      base: '0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c',
      logoURI: '/images/dex/KnightSwap.png',
    },
    {
      name: 'PadSwap BSC',
      address: '0x76437234D29f84D9A12820A137c6c6A719138C24',
      base: '0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c',
      logoURI: '/images/dex/PadSwap.png',
    },
    {
      name: 'ApeSwap BSC',
      address: '0xcF0feBd3f17CEf5b47b0cD257aCf6025c5BFf3b7',
      base: '0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c',
      logoURI: '/images/dex/ApeSwap.png',
    },
    {
      name: 'RadioShack BSC',
      address: '0x5bc3ED94919af03279c8613cB807ab667cE5De99',
      base: '0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c',
      logoURI: '/images/dex/RadioShack.png',
    },
    {
      name: 'BabySwap BSC',
      address: '0x325E343f1dE602396E256B67eFd1F61C3A6B38Bd',
      base: '0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c',
      logoURI: '/images/dex/BabySwap.png',
    },
    {
      name: 'MarsSwap BSC',
      address: '0xb68825C810E67D4e444ad5B9DeB55BA56A66e72D',
      base: '0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c',
      logoURI: '/images/dex/MarsSwap.png',
    },
    {
      name: 'SheepDex BSC',
      address: '0xcD87782A717F40542e18C61Ebb7210d3132e17d8',
      base: '0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c',
      logoURI: '/images/dex/SheepDex.png',
    },
    {
      name: 'Empire BSC',
      address: '0xdADaae6cDFE4FA3c35d54811087b3bC3Cd60F348',
      base: '0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c',
    },
    {
      name: 'JetSwap BSC',
      address: '0xBe65b8f75B9F20f4C522e0067a3887FADa714800',
      base: '0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c',
      logoURI: '/images/dex/JetSwap.png',
    },
    {
      name: 'HyperJump BSC',
      address: '0x3bc677674df90A9e5D741f28f6CA303357D0E4Ec',
      base: '0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c',
      logoURI: '/images/dex/HyperJump.png',
    },
  ],
  25: [
    {
      name: 'VVS Finance',
      address: '0x145863Eb42Cf62847A6Ca784e6416C1682b1b2Ae',
      base: '0x5C7F8A570d578ED84E63fdFA7b1eE72dEae1AE23',
      logoURI: '/images/dex/VVSFinance.png',
    },
    {
      name: 'CronaSwap',
      address: '0xcd7d16fB918511BF7269eC4f48d61D79Fb26f918',
      base: '0x5C7F8A570d578ED84E63fdFA7b1eE72dEae1AE23',
      logoURI: '/images/dex/CronaSwap.png',
    },
    {
      name: 'ElkSwap Cronos',
      address: '0xdB02A597b283eACb9436Cd2a2d15039a11A3299d',
      base: '0x5c7f8a570d578ed84e63fdfa7b1ee72deae1ae23',
      logoURI: '/images/dex/ElkFinance.png',
    },
    {
      name: 'MMF Cronos',
      address: '0x145677FC4d9b8F19B5D56d1820c48e0443049a30',
      base: '0x5c7f8a570d578ed84e63fdfa7b1ee72deae1ae23',
      logoURI: '/images/dex/MMF.png',
    },
    {
      name: 'CyborgSwap Cronos',
      address: '0x5bFc95C3BbF50579bD57957cD074fa96a4d5fF9F',
      base: '0xca2503482e5D6D762b524978f400f03E38d5F962',
      logoURI: '/images/dex/CyborgSwap.png',
    },
    {
      name: 'CroDex Cronos',
      address: '0xeC0A7a0C2439E8Cb67b992b12ecd020Ea943c7Be',
      base: '0x5C7F8A570d578ED84E63fdFA7b1eE72dEae1AE23',
      logoURI: '/images/dex/Crodex.png',
    },
    {
      name: 'CrowFi Cronos',
      address: '0xd30d3aC04E2325E19A2227cfE6Bc860376Ba20b1',
      base: '0x5C7F8A570d578ED84E63fdFA7b1eE72dEae1AE23',
      logoURI: '/images/dex/CrowFi.png',
    },
    {
      name: 'PhotonSwap Cronos',
      address: '0x69004509291F4a4021fA169FafdCFc2d92aD02Aa',
      base: '0x5C7F8A570d578ED84E63fdFA7b1eE72dEae1AE23',
      logoURI: '/images/dex/PhotonSwap.png',
    },
    {
      name: 'EmpireSwap Cronos',
      address: '0xdADaae6cDFE4FA3c35d54811087b3bC3Cd60F348',
      base: '0x5C7F8A570d578ED84E63fdFA7b1eE72dEae1AE23',
    },
    {
      name: 'SmolSwap Cronos',
      address: '0x8118DD9fED86523Bf724e2EC5f56055Da0668AF4',
      base: '0x5C7F8A570d578ED84E63fdFA7b1eE72dEae1AE23',
      logoURI: '/images/dex/SmolSwap.png',
    },
    {
      name: 'CryptoSwapp Cronos',
      address: '0x600d0b65C2A25b64C9b517A43B7a44592448d285',
      base: '0x5C7F8A570d578ED84E63fdFA7b1eE72dEae1AE23',
      logoURI: '/images/dex/Swapp.png',
    },
  ],
  250: [
    {
      name: 'Sushi Fantom',
      address: '0x1b02dA8Cb0d097eB8D57A175b88c7D8b47997506',
      base: '0x21be370D5312f44cB42ce377BC9b8a0cEF1A4C83',
      logoURI: '/images/dex/Sushiswap.png',
    },
    {
      name: 'SpookySwap Fantom',
      address: '0xf491e7b69e4244ad4002bc14e878a34207e38c29',
      base: '0x21be370D5312f44cB42ce377BC9b8a0cEF1A4C83',
      logoURI: '/images/dex/Spookyswap.png',
    },
    {
      name: 'Elk Finance Fantom',
      address: '0x4D2cf285a519261F30b4d9c2c344Baf260d65Fa2',
      base: '0x21be370D5312f44cB42ce377BC9b8a0cEF1A4C83',
      logoURI: '/images/dex/ElkFinance.png',
    },
    {
      name: 'SpiritSwap Fantom',
      address: '0x16327E3FbDaCA3bcF7E38F5Af2599D2DDc33aE52',
      base: '0x21be370D5312f44cB42ce377BC9b8a0cEF1A4C83',
      logoURI: '/images/dex/Spiritswap.png',
    },
    {
      name: 'ProtoFi Fantom',
      address: '0xF4C587a0972Ac2039BFF67Bc44574bB403eF5235',
      base: '0x21be370D5312f44cB42ce377BC9b8a0cEF1A4C83',
      logoURI: '/images/dex/ProtoFi.png',
    },
    {
      name: 'Excalibur Fantom',
      address: '0xc8Fe105cEB91e485fb0AC338F2994Ea655C78691',
      base: '0x21be370D5312f44cB42ce377BC9b8a0cEF1A4C83',
      logoURI: '/images/dex/Excalibur.png',
    },
    {
      name: 'WigoSwap Fantom',
      address: '0x5023882f4D1EC10544FCB2066abE9C1645E95AA0',
      base: '0x21be370D5312f44cB42ce377BC9b8a0cEF1A4C83',
      logoURI: '/images/dex/WigoSwap.png',
    },
    {
      name: 'Morpheus Fantom',
      address: '0x8aC868293D97761A1fED6d4A01E9FF17C5594Aa3',
      base: '0x21be370D5312f44cB42ce377BC9b8a0cEF1A4C83',
      logoURI: '/images/dex/MorpheusSwap.png',
    },
    {
      name: 'DFYN Fantom',
      address: '0x2724B9497b2cF3325C6BE3ea430b3cec34B5Ef2d',
      base: '0x21be370D5312f44cB42ce377BC9b8a0cEF1A4C83',
    },
    {
      name: 'Solidly Fantom',
      address: '0xa38cd27185a464914D3046f0AB9d43356B34829D',
      base: '0x21be370D5312f44cB42ce377BC9b8a0cEF1A4C83',
      logoURI: '/images/dex/Solidly.png',
    },
    {
      name: 'Empire Fantom',
      address: '0xdADaae6cDFE4FA3c35d54811087b3bC3Cd60F348',
      base: '0x38F73653fA46943de76c228a47b7d9B81F28FFff',
    },
    {
      name: 'PaintSwap Fantom',
      address: '0xfD000ddCEa75a2E23059881c3589F6425bFf1AbB',
      base: '0x21be370D5312f44cB42ce377BC9b8a0cEF1A4C83',
      logoURI: '/images/dex/PaintSwap.png',
    },
    {
      name: 'JetSwap Fantom',
      address: '0x845E76A8691423fbc4ECb8Dd77556Cb61c09eE25',
      base: '0x21be370D5312f44cB42ce377BC9b8a0cEF1A4C83',
      logoURI: '/images/dex/JetSwap.png',
    },
    {
      name: 'HyperJump Fantom',
      address: '0x53c153a0df7E050BbEFbb70eE9632061f12795fB',
      base: '0x21be370D5312f44cB42ce377BC9b8a0cEF1A4C83',
      logoURI: '/images/dex/HyperJump.png',
    },
    {
      name: 'DegenHaus Fantom',
      address: '0xcdA8f0fB4132D977AD427d18555E0cb1b1dfA363',
      base: '0x21be370D5312f44cB42ce377BC9b8a0cEF1A4C83',
      logoURI: '/images/dex/degenhaus.png',
    },
  ],
  100: [
    {
      name: 'Sushi xDai',
      address: '0x1b02dA8Cb0d097eB8D57A175b88c7D8b47997506',
      base: '0xe91D153E0b41518A2Ce8Dd3D7944Fa863463a97d',
      logoURI: '/images/dex/Sushiswap.png',
    },
    {
      name: 'ElkSwap Gnosis',
      address: '0xe5759714998e8B50A33c7333C04C2d02e5dcE77f',
      base: '0xe91D153E0b41518A2Ce8Dd3D7944Fa863463a97d',
      logoURI: '/images/dex/ElkFinance.png',
    },
    {
      name: 'HoneySwap Gnosis',
      address: '0x1C232F01118CB8B424793ae03F870aa7D0ac7f77',
      base: '0xe91D153E0b41518A2Ce8Dd3D7944Fa863463a97d',
      logoURI: '/images/dex/HoneySwap.png',
    },
    {
      name: 'BAO Gnosis',
      address: '0x6093AeBAC87d62b1A5a4cEec91204e35020E38bE',
      base: '0xe91D153E0b41518A2Ce8Dd3D7944Fa863463a97d',
      logoURI: '/images/dex/BaoFinance.png',
    },
    {
      name: 'Empire Gnosis',
      address: '0xdADaae6cDFE4FA3c35d54811087b3bC3Cd60F348',
      base: '0xe91D153E0b41518A2Ce8Dd3D7944Fa863463a97d',
    },
  ],
  43114: [
    {
      name: 'Trader Joe',
      address: '0x60aE616a2155Ee3d9A68541Ba4544862310933d4',
      base: '0xB31f66AA3C1e785363F0875A1B74E27b85FD66c7',
      logoURI: '/images/dex/TraderJoe.png',
    },
    {
      name: 'Pangolin Avax',
      address: '0xE54Ca86531e17Ef3616d22Ca28b0D458b6C89106',
      base: '0xB31f66AA3C1e785363F0875A1B74E27b85FD66c7',
      logoURI: '/images/dex/Pangolin.png',
    },
    {
      name: 'Thorus Avax',
      address: '0xb5b2444eDF79b00d40f463f79158D1187a0D0c25',
      base: '0xB31f66AA3C1e785363F0875A1B74E27b85FD66c7',
      logoURI: '/images/dex/Thorus.png',
    },
    {
      name: 'Elk Finance Avax',
      address: '0x9E4AAbd2B3E60Ee1322E94307d0776F2c8e6CFbb',
      base: '0xB31f66AA3C1e785363F0875A1B74E27b85FD66c7',
      logoURI: '/images/dex/ElkFinance.png',
    },
    {
      name: 'Lydia Avax',
      address: '0xA52aBE4676dbfd04Df42eF7755F01A3c41f28D27',
      base: '0xB31f66AA3C1e785363F0875A1B74E27b85FD66c7',
      logoURI: '/images/dex/Lydia.png',
    },
    {
      name: 'RadioShack Avax',
      address: '0x763D8D37669bB18064b410e17E3bB46BCF34F487',
      base: '0xB31f66AA3C1e785363F0875A1B74E27b85FD66c7',
      logoURI: '/images/dex/RadioShack.png',
    },
    {
      name: 'HakuSwap Avax',
      address: '0x5F1FdcA239362c5b8A8Ada26a256ac5626CC33E0',
      base: '0xB31f66AA3C1e785363F0875A1B74E27b85FD66c7',
      logoURI: '/images/dex/RadioShack.png',
    },
    {
      name: 'Empire Avax',
      address: '0xdADaae6cDFE4FA3c35d54811087b3bC3Cd60F348',
      base: '0xB31f66AA3C1e785363F0875A1B74E27b85FD66c7',
    },
  ],
  42161: [
    {
      name: 'Sushi Arbitrum',
      address: '0x1b02dA8Cb0d097eB8D57A175b88c7D8b47997506',
      base: '0x82aF49447D8a07e3bd95BD0d56f35241523fBab1',
      logoURI: '/images/dex/Sushiswap.png',
    },
    {
      name: 'Uniswap Arbitrum',
      address: '0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D',
      base: '0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2',
      logoURI: '/images/dex/UniswapV3.png',
    },
    {
      name: 'DFYN Arbitrum',
      address: '0xaedE1EFe768bD8A1663A7608c63290C60B85e71c',
      base: '0x82aF49447D8a07e3bd95BD0d56f35241523fBab1',
      logoURI: '/images/dex/DFYN.png',
    },
  ],
  1666600000: [
    {
      name: 'Sushi Harmony',
      address: '0x1b02dA8Cb0d097eB8D57A175b88c7D8b47997506',
      base: '0xcF664087a5bB0237a0BAd6742852ec6c8d69A27a',
      logoURI: '/images/dex/Sushiswap.png',
    },
    {
      name: 'Viper Swap',
      address: '0xf012702a5f0e54015362cbca26a26fc90aa832a3',
      base: '0xcF664087a5bB0237a0BAd6742852ec6c8d69A27a',
      logoURI: '/images/dex/ViperSwap.png',
    },
    {
      name: 'WAGMI Swap',
      address: '0x06fdb55031a0924789107bd97e366a27bbb3d422',
      base: '0xcF664087a5bB0237a0BAd6742852ec6c8d69A27a',
      logoURI: '/images/dex/WAGMISwap.png',
    },
  ],
  128: [
    {
      name: 'HECO Swap',
      address: '0x4CCDC27CFf0AD2cfbfe244C8f26A876E6A3aB3bF',
      base: '0x5545153CCFcA01fbd7Dd11C0b23ba694D9509A6F',
      logoURI: '/images/dex/HecoSwap.png',
    },
    {
      name: 'MDEX Swap',
      address: '0xED7d5F38C79115ca12fe6C0041abb22F0A06C300',
      base: '0x5545153CCFcA01fbd7Dd11C0b23ba694D9509A6F',
      logoURI: '/images/dex/MDEX.png',
    },
    {
      name: 'Elk Finance Huobi',
      address: '0x4CCDC27CFf0AD2cfbfe244C8f26A876E6A3aB3bF',
      base: '0x5545153CCFcA01fbd7Dd11C0b23ba694D9509A6F',
      logoURI: '/images/dex/ElkFinance.png',
    },
    {
      name: 'Pippi Finance Huobi',
      address: '0xBe4AB2603140F134869cb32aB4BC56d762Ae900B',
      base: '0x5545153CCFcA01fbd7Dd11C0b23ba694D9509A6F',
      logoURI: '/images/dex/PippiFinance.png',
    },
  ],
  42220: [
    {
      name: 'Ube Swap Celo',
      address: '0xE3D8bd6Aed4F159bc8000a9cD47CffDb95F96121',
      base: '0x471EcE3750Da237f93B8E339c536989b8978a438',
      logoURI: '/images/dex/UbeSwap.png',
    },
  ],
  66: [
    {
      name: 'Cherry Swap OKEx',
      address: '0x865bfde337C8aFBffF144Ff4C29f9404EBb22b15',
      base: '0x8F8526dbfd6E38E3D8307702cA8469Bae6C56C15',
      logoURI: '/images/dex/CherrySwap.png',
    },
    {
      name: 'KSwap OKEx',
      address: '0xc3364A27f56b95f4bEB0742a7325D67a04D80942',
      base: '0x8F8526dbfd6E38E3D8307702cA8469Bae6C56C15',
      logoURI: '/images/dex/Kswap.png',
    },
    {
      name: 'Pippi Finance OKEx',
      address: '0xec5bBf69C6BE29a7566F9b7D8125321DF2c82797',
      base: '0x8F8526dbfd6E38E3D8307702cA8469Bae6C56C15',
      logoURI: '/images/dex/PippiFinance.png',
    },
    {
      name: 'DFYN OKEx',
      address: '0x34686CBF7229ed0bff2Fbe7ED2CFC916317764f6',
      base: '0x8F8526dbfd6E38E3D8307702cA8469Bae6C56C15',
      logoURI: '/images/dex/DFYN.png',
    },
  ],
  137: [
    {
      name: 'Firebird Polygon',
      address: '0xF6fa9Ea1f64f1BBfA8d71f7f43fAF6D45520bfac',
      base: '0x0d500B1d8E8eF31E21C99d1Db9A6444d3ADf1270',
      logoURI: '/images/dex/Firebird.png',
    },
    {
      name: 'Quickswap Polygon',
      address: '0xa5E0829CaCEd8fFDD4De3c43696c57F7D7A678ff',
      base: '0x0d500B1d8E8eF31E21C99d1Db9A6444d3ADf1270',
      logoURI: '/images/dex/QuickSwap.png',
    },
    {
      name: 'Elk Finance Polygon',
      address: '0xF6fa9Ea1f64f1BBfA8d71f7f43fAF6D45520bfac',
      base: '0x0d500B1d8E8eF31E21C99d1Db9A6444d3ADf1270',
      logoURI: '/images/dex/ElkFinance.png',
    },
    {
      name: 'HoneySwap Polygon',
      address: '0xaD340d0CD0B117B0140671E7cB39770e7675C848',
      base: '0x0d500B1d8E8eF31E21C99d1Db9A6444d3ADf1270',
      logoURI: '/images/dex/HoneySwap.png',
    },
    {
      name: 'ApeSwap Polygon',
      address: '0xA102072A4C07F06EC3B4900FDC4C7B80b6c57429',
      base: '0x0d500B1d8E8eF31E21C99d1Db9A6444d3ADf1270',
      logoURI: '/images/dex/ApeSwap.png',
    },
    {
      name: 'DFYN Polygon',
      address: '0xC0788A3aD43d79aa53B09c2EaCc313A787d1d607',
      base: '0x4c28f48448720e9000907BC2611F73022fdcE1fA',
      logoURI: '/images/dex/DFYN.png',
    },
    {
      name: 'RadioShack Polygon',
      address: '0xAf877420786516FC6692372c209e0056169eebAf',
      base: '0x0d500B1d8E8eF31E21C99d1Db9A6444d3ADf1270',
      logoURI: '/images/dex/RadioShack.png',
    },
    {
      name: 'Gravity Finance Polygon',
      address: '0x57dE98135e8287F163c59cA4fF45f1341b680248',
      base: '0x0d500B1d8E8eF31E21C99d1Db9A6444d3ADf1270',
      logoURI: '/images/dex/GravityFinance.png',
    },
    {
      name: 'PolyCat Polygon',
      address: '0x94930a328162957FF1dd48900aF67B5439336cBD',
      base: '0x0d500B1d8E8eF31E21C99d1Db9A6444d3ADf1270',
      logoURI: '/images/dex/Polycat.png',
    },
    {
      name: 'Empire Polygon',
      address: '0xB2855A6dAeeBDB72B0176A479A983066ae9775A6',
      base: '0x0d500B1d8E8eF31E21C99d1Db9A6444d3ADf1270',
    },
    {
      name: 'JetSwap Polygon',
      address: '0x5C6EC38fb0e2609672BDf628B1fD605A523E5923',
      base: '0x0d500B1d8E8eF31E21C99d1Db9A6444d3ADf1270',
      logoURI: '/images/dex/JetSwap.png',
    },
  ],
  288: [
    {
      name: 'OolongSwap',
      address: '0x17C83E2B96ACfb5190d63F5E46d93c107eC0b514',
      base: '0xDeadDeAddeAddEAddeadDEaDDEAdDeaDDeAD0000',
      logoURI: '/images/dex/OolongSwap.png',
    },
  ],
  321: [
    {
      name: 'KuSwap',
      address: '0xa58350d6dee8441aa42754346860e3545cc83cda',
      base: '0x4446fc4eb47f2f6586f9faab68b3498f86c07521',
      logoURI: '/images/dex/KuSwap.png',
    },
    {
      name: 'Koffee Swap',
      address: '0xc0fFee0000C824D24E0F280f1e4D21152625742b',
      base: '0x4446fc4eb47f2f6586f9faab68b3498f86c07521',
      logoURI: '/images/dex/KoffeeSwap.png',
    },
    {
      name: 'KuDEX',
      address: '0x6074e20633D2D8FbdF82119867a81581cabe06dD',
      base: '0x4446fc4eb47f2f6586f9faab68b3498f86c07521',
      logoURI: '/images/dex/Kudex.png',
    },
    {
      name: 'Elk Finance Kucoin',
      address: '0x5ddac4c73b15353dc4a00daeafb38631a7cbd389',
      base: '0x4446fc4eb47f2f6586f9faab68b3498f86c07521',
      logoURI: '/images/dex/ElkFinance.png',
    },
  ],
  1088: [
    {
      name: 'Netswap',
      address: '0x1E876cCe41B7b844FDe09E38Fa1cf00f213bFf56',
      base: '0xDeadDeAddeAddEAddeadDEaDDEAdDeaDDeAD0000',
      logoURI: '/images/dex/NetSwap.jpg',
    },
    {
      name: 'Tethys Metis',
      address: '0x81b9FA50D5f5155Ee17817C21702C3AE4780AD09',
      base: '0xDeadDeAddeAddEAddeadDEaDDEAdDeaDDeAD0000',
      logoURI: '/images/dex/Tethys.png',
    },
  ],
  69: [
    {
      name: 'DuneSwap Oasis',
      address: '0x7F80093D0759e485239D3010A47B805b6507daAe',
      base: '0x5C78A65AD6D0eC6618788b6E8e211F31729111Ca',
      logoURI: '/images/dex/DuneSwap.png',
    },
    {
      name: 'Lizard DEX Oasis',
      address: '0x78577Ae67bC03CFF9044dd4B2db8528A0Eed573c',
      base: '0x21C718C22D52d0F3a789b752D4c2fD5908a8A733',
      logoURI: '/images/dex/LizardDex.png',
    },
    {
      name: 'Gemkeeper Oasis',
      address: '0x543d97779ca53d7b4355cA013C853D86B7F558d9',
      base: '0x21C718C22D52d0F3a789b752D4c2fD5908a8A733',
      logoURI: '/images/dex/Gemkeeper.png',
    },
  ],
  1284: [
    {
      name: 'Thorus Moonbeam',
      address: '0xb5b2444eDF79b00d40f463f79158D1187a0D0c25',
      base: '0xacc15dc74880c9944775448304b263d191c6077f',
      logoURI: '/images/dex/Thorus.png',
    },
    {
      name: 'PadSwap Moonbeam',
      address: '0x40F1fEF0Fe68Fd10ff904070ee00a7769EE7fe34',
      base: '0xe3DB50049C74De2F7d7269823af3178Cf22fd5E3',
      logoURI: '/images/dex/PadSwap.png',
    },
    {
      name: 'SolarFlare Moonbeam',
      address: '0xd3B02Ff30c218c7f7756BA14bcA075Bf7C2C951e',
      base: '0xacc15dc74880c9944775448304b263d191c6077f',
      logoURI: '/images/dex/Solarflare.png',
    },
    {
      name: 'BeamSwap Kucoin',
      address: '0x96b244391D98B62D19aE89b1A4dCcf0fc56970C7',
      base: '0xacc15dc74880c9944775448304b263d191c6077f',
      logoURI: '/images/dex/BeamSwap.png',
    },
    {
      name: 'Elk Finance Kucoin',
      address: '0x5ddac4c73b15353dc4a00daeafb38631a7cbd389',
      base: '0xacc15dc74880c9944775448304b263d191c6077f',
      logoURI: '/images/dex/ElkFinance.png',
    },
  ],
  1285: [
    {
      name: 'Elk Finance Moonriver',
      address: '0xdCB8C29298AF7E9C48b56dB3c87dB6d124d1Ef97',
      base: '0x98878b06940ae243284ca214f92bb71a2b032b8a',
      logoURI: '/images/dex/ElkFinance.png',
    },
    {
      name: 'Huckleberry Moonriver',
      address: '0x2d4e873f9Ab279da9f1bb2c532d4F06f67755b77',
      base: '0x98878B06940aE243284CA214f92Bb71a2b032B8A',
      logoURI: '/images/dex/Huckleberry.png',
    },
    {
      name: 'PadSwap Moonbriver',
      address: '0x790d4b443edB9ce9A8d1aEC585edd89E51132D2c',
      base: '0x663a07a2648296f1A3C02EE86A126fE1407888E5',
      logoURI: '/images/dex/PadSwap.png',
    },
    {
      name: 'Solarbeam Moonbriver',
      address: '0xAA30eF758139ae4a7f798112902Bf6d65612045f',
      base: '0x98878B06940aE243284CA214f92Bb71a2b032B8A',
      logoURI: '/images/dex/Solarbeam.png',
    },
  ],
  2000: [
    {
      name: 'DogeSwap',
      address: '0xa4EE06Ce40cb7e8c04E127c1F7D3dFB7F7039C81',
      base: '0xb7ddc6414bf4f5515b52d8bdd69973ae205ff101',
      logoURI: '/images/dex/DogeSwap.png',
    },
    {
      name: 'YodeSwap',
      address: '0x72d85Ab47fBfc5E7E04a8bcfCa1601D8f8cE1a50',
      base: '0xb7ddc6414bf4f5515b52d8bdd69973ae205ff101',
      logoURI: '/images/dex/YodeSwap.png',
    },
  ],
  42262: [
    {
      name: 'ValleySwap',
      address: '0x7C0b0a525fc6A2caDf7AE37198119025C6feA28a',
      base: '0x21C718C22D52d0F3a789b752D4c2fD5908a8A733',
      logoURI: '/images/dex/ValleySwap.webp',
    },
    {
      name: 'YuzuSwap',
      address: '0x250d48C5E78f1E85F7AB07FEC61E93ba703aE668',
      base: '0x21C718C22D52d0F3a789b752D4c2fD5908a8A733',
      logoURI: '/images/dex/YuzuSwap.png',
    },
    {
      name: 'GemKeeper',
      address: '0x543d97779ca53d7b4355cA013C853D86B7F558d9',
      base: '0x21C718C22D52d0F3a789b752D4c2fD5908a8A733',
      logoURI: '/images/dex/YuzuSwap.png',
    },
  ],
  9001: [
    {
      name: 'EvmoSwap',
      address: '0x64C3b10636baBb3Ef46a7E2E5248b0dE43198fCB',
      base: '0xD4949664cD82660AaE99bEdc034a0deA8A0bd517',
      logoURI: '/images/dex/CronusFinance.webp',
    },
    {
      name: 'Cronus',
      address: '0x249EC47267bc0f0B486E936F9aeE0e9c7CbC37F1',
      base: '0xD4949664cD82660AaE99bEdc034a0deA8A0bd517',
      logoURI: '/images/dex/EvmoSwap.png',
    },
  ],
  10000: [
    {
      name: 'MistSwap',
      address: '0x5d0bF8d8c8b054080E2131D8b260a5c6959411B8',
      base: '0x3743eC0673453E5009310C727Ba4eaF7b3a1cc04',
      logoURI: '/images/dex/MistSwap.png',
    },
    {
      name: 'LawSwap',
      address: '0xD301b5334912190493fa798Cf796440Cd9B33DB1',
      base: '0x3743eC0673453E5009310C727Ba4eaF7b3a1cc04',
      logoURI: '/images/dex/LawSwap.png',
    },
    {
      name: 'BenSwap',
      address: '0xa194133ED572D86fe27796F2feADBAFc062cB9E0',
      base: '0x9c106Dd7F8d3f873779696654d55e79ebC89bA7A',
      logoURI: '/images/dex/BenSwap.png',
    },
    {
      name: 'TangoSwap',
      address: '0xb93184fB3eEDb4d32150763578cA305488240c8e',
      base: '0x3743eC0673453E5009310C727Ba4eaF7b3a1cc04',
      logoURI: '/images/dex/TangoSwap.png',
    },
    {
      name: 'EmberSwap',
      address: '0x217057A8B0bDEb160829c19243A2E03bfe95555a',
      base: '0x3743eC0673453E5009310C727Ba4eaF7b3a1cc04',
      logoURI: '/images/dex/EmberSwap.png',
    },
    {
      name: 'Tropical Finance',
      address: '0xf6aA8520cE2f044f5868d103dfC3b92Eb1B51eC3',
      base: '0x3743eC0673453E5009310C727Ba4eaF7b3a1cc04',
      logoURI: '/images/dex/TropicalFinance.png',
    },
  ],
  6969: [
    {
      name: 'LIF3',
      address: '0xBA78Fb44c72c79C359625060E849FC73EA63183e',
      base: '0xDeadDeAddeAddEAddeadDEaDDEAdDeaDDeAD0000',
      logoURI: '/images/dex/LIF3.png',
    },
  ],
  42170: [
    {
      name: 'SushiSwap',
      address: '0x1b02dA8Cb0d097eB8D57A175b88c7D8b47997506',
      base: '0x722E8BdD2ce80A4422E880164f2079488e115365',
      logoURI: '/images/dex/Sushiswap.png',
    },
  ],
  1030: [
    {
      name: 'Swappi',
      address: '0xE3F85aAd0c8DD7337427B9dF5d0fB741d65EEEB5',
      base: '0x14b2d3bc65e74dae1030eafd8ac30c533c976a9b',
      logoURI: '/images/dex/Swappi.png',
    },
  ],
  1818: [
    {
      name: 'Capricorn',
      address: '0x34c385dd9015d663830a37CD2E75818fda6C605f',
      base: '0x9D3F61338d6Eb394e378D28C1Fd17d5909aC6591',
      logoURI: '/images/dex/Capricorn.png',
    },
  ],
  82: [
    {
      name: 'VoltSwap',
      address: '0xC6E88363ea74F31f514b56E979413B3Ee8d76f39',
      base: '0x687A6294D0D6d63e751A059bf1ca68E4AE7B13E2',
      logoURI: '/images/dex/VoltSwap.png',
    },
  ],
  57: [
    {
      name: 'Pegasys',
      address: '0x017dAd2578372CAEE5c6CddfE35eEDB3728544C4',
      base: '0xd3e822f3ef011Ca5f17D82C956D952D8d7C3A1BB',
      logoURI: '/images/dex/Pegasys.png',
    },
  ],
  2222: [
    {
      name: 'JupiterSwap',
      address: '0xEa3CB4Ba9d1fD6fb19Df1380958d5649bD3e7C50',
      base: '0xc86c7C0eFbd6A49B35E8714C5f59D99De09A225b',
      logoURI: '/images/dex/JupiterSwap.png',
    },
  ],
  108: [
    {
      name: 'LaserSwap',
      address: '0xEa3CB4Ba9d1fD6fb19Df1380958d5649bD3e7C50',
      base: '0xc86c7C0eFbd6A49B35E8714C5f59D99De09A225b',
      logoURI: '/images/dex/LaserSwap.png',
    },
  ],
  2611: [],
  87: [
    {
      name: 'Fusion',
      address: '0xb2a89c56538f56999332d7e046b82b6ad43aac81',
      base: '0x657a66332A65B535Da6C5d67b8cD1D410c161a08',
      logoURI: '/images/dex/Fusion.png',
    },
  ],
  10001: [
    {
      name: 'PowSwap',
      address: '0x6851e767Aaa9C4674Fe8cAE95AFCc819b7Fb0403',
      base: '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2',
      logoURI: '/images/dex/Powswap.png',
    },
    {
      name: 'UniWswap',
      address: '0x633e494C22D163F798b25b0264b92Ac612645731',
      base: '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2',
      logoURI: '/images/dex/uniwswap.png',
    },
  ],
  52: [
    // {
    //   name: 'OneSwap',
    //   address: '0x5eD3C9089Ed0355bc77CF439Dc2eD28c4054C8c4',
    //   base: "",
    //   logoURI: '/images/dex/OneSwap.jpeg',
    // },
    {
      name: 'IFSwap',
      address: '0xBdC129f61d8840ede28EB6e26760682D9c5c30fD',
      base: '0xE6f8988d30614afE4F7124b76477Add79c665822',
      logoURI: '/images/dex/IFSwap.png',
    },
    {
      name: 'RBXChange CSC',
      address: '0x257fb545563AE98f2d1b324C0224e58a490A518B',
      base: '0x7A0E83D39048425831d50633C464f035903c5067',
      logoURI: '/images/rbx.png',
    },
  ],
};
