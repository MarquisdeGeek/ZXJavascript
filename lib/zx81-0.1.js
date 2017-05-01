/**

ZX Javascript

Copyright 2017.
Steven Goodwin. 

This file is released under the GNU General Public License Version 3.

Please see the licensing conditions for details.

The latest version is generally available at:
	https://github.com/marquisdegeek/zxjavascript

See it at:
	https://marquisdegeek.com/code_zxjavascript
*/
// START 
// START src/js/system.js
var zx = {};

// START src/js/zx81/rom.js
zx.rom ="d3fd01ff7fc3cb032a16402218401846a7c2f107c3f507ff2a16407ea7c00000cd490018f7ffffffc39d19f1d9e3d9c9c52a1440e5c388140dc24500e105c8cbd9ed4ffbe9d1c818f82a1640232216407efe7fc018f6e16efd7500ed7b0240cd0702c3bc14ff083cfa6d00280208c908f5c5d5e52a0c40cbfc76d3fddde93f3d283b2638292b2c363c2a37391d1e1f20211c2524232235342e3a3e7631302f2d001b3233270e190f18e3e1e4e5e2c0d9e0dbdd75dadedf7277747370710b11100ddc79141516d80c1a121317cdcec178cacbccd1d2c7c8c9cf4078787878787878787878c2d3c4d6d578d4c6c5d0787842d741080a098a898182078406010287040577788503838b91908d8678929596888f0b8b26b93926a78f283429aa3b26b1312ab3382eb32834b83926b32638b32628b82639b331b32a3db52e33b93836b7382cb32627b8352a2ab03a38b73839378d282d378d3334b9179734b72633a9139412941392392d2ab339b438392ab53135372e33b931312e38b9383934b5383134bc2b2638b9332abc3828373431b1283433b9292eb2372ab22b34b72c3439b42c34383aa72e33353ab9313426a9312e38b9312ab935263a38aa332a3db9353430aa35372e33b9353134b9373ab338263baa372633a92eab2831b83a33353134b928312a26b7372a393a37b3283435be3733a92e33302a3e8d35ae23eb2a144037ed52ebd0e1213b407e17ae17d03e7f080611d3fe10fed3fd08173008cbfef5c5d5e51803cbb6c92a34402b3e7fa4b57c2003171802463767223440d0cdbb02ed4b254022254078c602ed423a2740b4b558060b213b40cb862008cb7ecbc6c80500372127403fcb1010fe467bfefe9f061fb6a01f77d3ff2a0c40cbfccd9202ed5f0101193ef5cdb5022bcd9202c32902dde1fd4e28fdcb3b7e280c79ed443c08d3fee1d1c1f1c93efc0601cdb5022be3e3dde9ed4f3eddfbe921ffff01fefeed78f601f6e0572ffe019fb0a56f7ca267cb00ed7838ed1fcb141717179fe618c61f322840c9fdcb3b7ec876d3fdfdcb3bbec9cf0ecda80338f9eb11cb12cd460f302e10fe1b7ab320f4cd1e03cb7e2328f8210940cd1e03cdfc0118f85e37cb13c89fe605c6044fd3ff062310fecd460f3072061e10fe0d20eea710fd18e0cda803cb12cb0acd4c0318fb0e0106003e7fdbfed3ff1f30491717382810f1f1bad2e503626bcd4c03cb7a792003be20d6231730f1fd341521094050cd4c0371cdfc0118f6d51e94061a1ddbfe17cb7b7b38f510f5d12004fe5630b23fcb1130adc97aa728bbcf0ccd550f3a014087fa9a0de1d0e5cde702cdf813626b0df809cbfec9cde702ed4b04400b60693e3f36022bbc20faa7ed42092330063528033528f32204402a04402b363e2bf92b2b2202403e1eed47ed56fd210040fd363b40217d40220c40061936762310fb221040cd9a14cdad14cd0702cd2a0a2a0a40ed5b2340a7ed52eb300419222340cdd8092801ebcd3e07fd351e20372a0a40cdd8092a164037ed52212340300beb7e23eda01218c5210a405e2356e5eb23cdd809cdbb05e1fdcb2d6e2008722b7318aacdad142a14407efe7e2008010600cd600a18f3fe762320eecd3705cd1f0a2a1440fd3600ffcd6607fdcb007e20243a2240fe18301d3c322240470e01cd1809545d7e2bbe20fc23eb3a0540fe4ddc5d0a18c9210000221840213b40cb7ecc2902cb4628fced4b2540cd4b0fcdbd0730933a06403dfa0805200f3206401d7bd62738015f21cc00180e7efe76282ffe40cbff381921c70019180d7efdcb01562007c6c0fee630017efef0ea2d055fcd37057bcd2605c37204cd9b0912c93e785f21820419194e2346c52a1440fdcb2d6e2016fdcb01967efe7fc823cdb40728f6fe2638f2fede28eafdcb01d618e8010100c3600a9f05540476057f05af05c4050c068b05af05af05cd93057e367f231809237efe762818367f2b771898cd9305cd5c0518f62bed5b14401afe7fc0d118ea2a0a40cdd809ebcdbb05210b40c364047be60732064018e6eb11c2047ee6c020f756235ec9cd1f0a216f04e5fdcb2d6ec02a1440220e402121182239402a0a40cdd809cdbb057ab3c82bcda50a234e234623ed5b0e403e7f1213e5211d001909ed72e1d0edb0ebd1cda6141891cd1f0a217204fdcb2d6e20112a14407efeff2806cde208cd2a0a211904e5cdba0ce1cd3705cd5c05cd730a201578b1c2e0060b0bed430740fd362202ed5b0c401813fe762812ed4b3040cd1809ed5b2940fd362202dffe76ca1304fd360180eb222940ebcd4d00cdc10cfdcb018e3ec0fd7719cda314fdcb2daefdcb007e28222a2940a6201c56235eed530740235e235623eb19cd460f38c7210040cb7e2802360cfdcb387ecc7108012101cd18093a0040ed4b07403c280cfe09200103ed432b4020010bcdeb073e18d7cd980acdad14c3c104ed430a402a1640eb211304e52a1a40ed52e5c5cde702cd2a0ae1cdd8092006cdf209cd600ac1793db0c8c5030303032bcd9e09cd0702c1c5132a1a402bedb82a0a40ebc1702b712b732b72c9fdcb01cecda70e78e63f6769220a40cdd8091e00cd450718fbed4b0a40cdea0916922805110000cb13fd731e7efe40c1d0c5cda50a237ad72323221640fdcb01c6ed4b18402a1640a7ed4220033eb8d72a16407e23cdb40722164028e4fe7f2810fe76285dcb772805cd4b0918d3d718d03a064006aba720053a014006b01f1fe60180cdf50718b9fe7ec02323232323c91600cb289ff6262e05958537cb1938fa0cc0482d2e0120f2217d005f1937c97ba7f81810af093c38fced423d28f11e1c83a72804fdcb0186d9e5fdcb014e2005cd08081803cd5108e1d9c957ed4b394079fe21281a3e76ba28302a0e40be7a20200d201923220e400e2105ed43394078fdbe222803a720dd2e04c35800cd9b09eb7723220e40fd3539c90e2105fdcb01c6c31809fe76281c4f3a3840e67ffe5c6f2640cc7108712cfd7538c916162a0c402318051601213c40cde702c5e5af5fd3fbe1cd460f38051fd3fbcf0cdbfb87fade0830eee5d57afe029fa307a3574e7923fe762824e5cb278787260fcb14836fcb119fae4f06087acb011f67dbfb1f30fb7cd3fb10f1e118d5dbfb1f30fb7a0fd3fbd11ccb5b28a7c11520a03e04d3fbcd0702c1215c40367606202b360010fb7dcbff323840c93e1790380bfdbe22da35083c473e1f91daad0ec6024ffdcb014e28073e5d91323840c9ed4339402a1040513e22914f3e76042bbe20fc10fa23edb12b220e4037e015c8c5cd9e09c141626b36002b10fbeb23220e40c9f5cd75093008fdcb01462002afd70ae63fd70a038730f7c1cb78c8fe1a2803fe38d8affdcb01c6c3f507e5211101cb7f2802e63ffe4330104704cb7e2328fb10f9cb772002fe183f444de1d00ac6e4c9010100e5cdc50ee1cdad092a1c40ebedb8c9f5e5210c403e095e2356e3a7ed5219e33009d5eb09eb722b7323d1233d20e8ebd1f1a7ed52444d0319ebc9e5217d40545dc1cdea09d0c5cdf209eb18f47eb8c0237e2bb9c9e57efe403817cb6f281487fa010a3f01050030020e1117237e30fb180623234e23462309d1a7ed52444d19ebc9fd4622c5cd2c0ac10518020618fdcb018e0e21c5cd1809c13a0540fe4d3814fdcb3afeafcdf5072a39407db4e67e20f3c31809545d2b480600edb02a1040cd170ac5782f47792f4f03cdad09ebe119d5edb0e1c92a1440cd4d00dffdcb2d6ec0215d40221c40cd4815cd8a15380421f0d809da9a0dbfc3bc14d5e5afcb78202060691eff1808d556235ee5eb1e000118fccde107019cffcde1070ef6cde1077dcdeb07e1d1c9cda60de1c8e9fdcb01ce7efe76ca840bd61ace002869fea7201be7cd920dfe1ac29a0de7cd920dcd4e0bef0134cdf50bcdf508183dfea82033e7cd920dcd4e0bcd020cc2ad0ee61f4ffdcb014e280afd9638cbffc63cd47108fd8639fe213a3a40de01cdfa08fdcb01c61806cd550fcd550bdfd61ace002806cd1d0dc3840bd48b0be7fe76c8c3d50acda60dc0e118e2cdc50afdcb0176ccf813280ac3db153e0bd7ed5b184078b10bc81a13ed531840cb7728edfec028e7c5cd4b09c118e3cdc50a3e76d7c9cdc50afdcb01c6afd7ed4b394079fdcb014e28053e5dfd96380e11b930020e01cd0b09c9cdf50bed4336403e2b90daad0e473e01cb2830023e04cb29300107f5cdf5087e07fe1030060f3002ee8f47119e0c3a304093fae90bf12fa01802f1b0fe083802ee8fd9d7d9c9cd020c47c5cd020c59c1514fc9cdcd15daad0e0e01c80effc9fd46220e21cd1809cd9b097e12fd343a2a0c4023545dedb1c35d0a8b8d2d7f8149755f40422b171f3752450f6d2b442d5a3b4c450d525a4d156a0114020600810e06de05ab0d0600b50e00dc0c00d80e041406df0605b90d04002e0e05cf0a0100e90e050914056a0d00c30303af0e033007061a0600920e036c0e05400305f602007c0e009a14002a0a061a0600af0b061a0600af0b000e0c0600320f002b0f00230f00690805cb0a032c07fd360101cd730acdbc1421004036ff212d40cb6e280efee37ec26f0dcda60dc8cf0ccf08df0600fe76c84fe779d6e1383b4f21290c094e0918032a30407e2322304001f40cc54ffe0b300b21160d0600094e09e5dfc9dfb92012e7c91725530f6b1376cda60dc0c17efe76c81872fe76cd9c0dbfc1cc1d0deb2a30404e2346ebc5c9cd1c11fd362d003008fdcb2dce2018cf01cca711fdcb0176200dafcda60dc4f813212d40b677ebed432e40221240c9c13a0140f5cd550ff1012113fd5601aae640201bcb7a20b7189dcd1c11f579f69f3c200bf118adcd550ffdcb0176c0cf0b20f4cda60dc8efa034c9fdcb017ec9cda60d2806ef02341aa7c8c3de0cfee02009e7cd920dcd1d0d1806cd1d0defa134efc00201e00134cd2113221f402b7ecbfe01060009073806cb21cd9e0923e5ef020234e1eb0e0aedb02a0740eb13732372cd5a0ed0fdcb087ec0fd462ecbb02a29407ee6c02017c5cdf209c1232323cd4c00dffef3eb20eaebe7ebb820e4222940c9fdcb2d4ec24b0d2a1240cb7e281c23221f40efe0e20fc00234cd5a0ed82a1f40110f00195e2356eb182ecf00efe1e0e2320002010333000434a7c93437c9cda70e78b12004ed4b3440ed433240c92a2b401805cda70e60697cfef03022cdd809222940c9cdcd1538162802ed44f5cda70ef1fdcb007ec802c9cd8a153801c8cf0acd810ec39a142a074023e3e5ed730240cd810e0106002a1c40093808eb21240019ed72d82e03c35800e1e37cfe3e2806ed73024018a1e3e5cf06fdcb087e2032cda314212d40cbeecbb63a0140e64001020020020e04b677f73676790f0f38053e0b122b772b367f2a3940223040e1c37204cf07cde702fdcb3bb6c9fdcb3bf6c30702cda70ecde7026069cd2d02fd3635ffcd070218053e7fdbfe1ffdcb3b863eff322740c9df0600c5fe40202fcda60d2828ed4b3240cd2015efa10f303716043080410000802e02a1032d34cd8a15ed4332407ea72803d61077180dfe42200dcda60d2804efa33434e7c38310fe412011cdbb02444d5114c4bd077a8a424feb183bcdd214386efe1bca471001d809fe16285dfe10200fcd4900cd550ffe11202ecd49001822fe0b2028cd4900e51803cd4900fe0b2014d1a7ed52444d210140cbb6cb7ec4c312e7c38810fe7620e1c39a0dd6c438f901ec04fe13281330f00610c6d94ffedc3002cbb1feea3802cbb9c5e7c3590ffe26381ecd1c11da4b0dcca7113a0140fec0384e23ed5b1c40cdf619eb221c401840cda60d2023cdd914df010600cd9e0923367e23eb2a1c400e05a7ed42221c40edb0eb2bcd4c001814e7fe7e20fb23ed5b1c40cdf619ed531c40221640fdcb01f6dffe10200cfdcb0176202acd6312e718f001c300fe12381dd6163004c60d180efe03380ad6c2380dfe063009c603814f214c100946d17ab8382ca7ca1800c5d5cda60d28097be63f47ef373418097bfdae01e640c29a0dd1210140cbf6cb7b2002cbb6c118cfd579fdcb01762015e63fc6084ffe102004cbf1180838d7fe172802cbf9c5e7c3590f0608080a020305050505050506fdcb01f6dfcdce14d29a0de54fe7e5cba9fe102817cbf1fe0d280ccbe9cdd214300acbb1e718f6e7fdcb01b641cda60d200879e6e0cbff4f18342a10407ee67f282ab9201f1787f29511382dd1d5e5231a13a728fbbe28f7f680be20061acdd2143015e1c5cdf209ebc118d1cbf8d1dffe102809cbe8180dd1d1d1e5dfcdd2143003e718f8e1cb10cb70c9af47cb79204bcb7e200e3c234e234623ebcdc312dfc35a1223232346cb71280a0528e8ebdffe102061ebeb1824e5dfe1fe1a2820cb792852cb712006fe11203ce7c9fe11286cfedf2032df2b221640185e210000e5e7e179fec02009dffe112851fedf28e5c5e5cdff12e3ebcddd1238190bcd051309d1c110b3cb792066e5cb712013424bdffe112802cf02e7e1110500cd051309c9cdff12e3cd0513c10923424bebcdc212dffe112807fe1a20dbcd6312e7fe1028f8fdcb01b6c9cda60dc4f813e7fe112850d5aff5c5110100dfe1fedf2817f1cdde12f55059e5dfe1fedf2809fe11c29a0d626b1813e5e7e1fe11280cf1cdde12f5df6069fe1120e6f1e3192be3a7ed52010000380723a7fa3112444dd1fdcb01b6cda60dc8afc5cdeb19c12a1c4077237323722371237023221c40fdcb01b6c9afd5e5f5cd920df1cda60d2812f5cda70ed178b1372805e1e5a7ed427ade00e1d1c9eb235e2356c9cda60dc8c506107c4d210000293806cb1117300419dad30e10f2c1c92a1240fdcb2d4e284401050003237ea728fbcdd21438f5fe0dcac813f7d52a12401b79d606473e40280e237ea728fb131210f7f680123e802a1240aee1cde713e5ef0234e1010500a7ed421840fdcb017628061106001918e72a1240ed4b2e40fdcb2d46203078b1c8e5f7d5c5545d233600edb8e5cdf813e1e3a7ed42093002444de3eb78b12802edb0c1d1e1eb78b1c8d5edb0e1c92b2b2b7ee5c5cdce13c1e1030303c3600a3e602a1240aef5cdf813eb09e5030303f7ebe10b0bc5edb8ebc10b702b71f1f5cdc714f12b772a1a402214402b3680c92a1c402b462b4e2b562b5e2b7e221c40c9cd1c11c29a0dcda60d2008cbb1cda711cd1d0d3808c5cdf209cd600ac1cbf90600c5210100cb7120022e05ebe72640cddd12da3112e1c524e56069cd0513ebdffe1a28e8fe1120bbe7c17968260023232919dad30ed5c5e5444d2a14402bcd9e092377c10b0b0b23712370f12377626b1b3600c1edb8c1702b712b3d20f8c92a1a402bcd9e092323c1ed431440c1eb23c92a10403680232214402a1440221a40221c40c92a1440367f23367623fd36220218ea215d40221f402a1a4018e2ed5b1440c35d0afe261802fe1c3fd0fe40c9cd4815fe1b2015efa1c00234e7cd1415380aefe0a405c0040f3418f0fe2ac0fd365dffe7fe152807fe162004fd345de7cd4815efe00002183834c9fe1cd8fe263fd8d61c4f0600fd210040c5efa034c1369178a7200777b1c8414e368935cb21cb1030f9cb38cb19237023712b2bc9f5efa034f1cd1415d8ef01a4040f34e718f3ef2d32c00227a1032d3200222d303340032d32000c0102013080481896802f040201a4e00004042f0205012fda0234c9cdf813a72005474ff5183143594ad6913fcb78f5cbf838243ced44fe08380659480600d608a7577b072807cb38cb191520f930080378b12003f137f5c5ef34c1f179c9cd8a15d8f505042803f137c9f1c9ef2d32000b2d33000d02343e1cd7c927343e16d7ef347ecd1d15ef307800800330ef1a209a850424c1303400031838a20f2434216b403690060a23e5c5efa42e0134cdcd15f690c1e17710ee23010800e52b7efe9028faed42e57ec66bf5f1237ece0027f5e60f77cbfe28f2f1e1060636802b10fbef02e134cdcd152802ed445f1c1ce12b1d7ee60f28f97bd605fe08f28216fef6fa8216c6062848fab21647cdd01610fb184043cdd016cdc2163e2ad778a7f29816ed44473e1618023e15d77806ff04d60a30fbc60a4f78a72803cdeb0779cdeb07c9ed44473e1bd73e1cd710fd18093e1cd73534e83e1bd73534e8cdd01618f87ee60fcdeb072bc97e3600a7c823cb7ecbfe2bc8c501050009414f372b7e2fce007710f879c1c9e5f54e23467723794ec5234e2346eb575ed52356235ed5d9d1e1c1d92356235ef1e1c9a7c8fe213016c547d9cb2dcb1acb1bd9cb1acb1b10f2c1d0cd4117c0d9af2e00575dd9110000c91cc014c0d91c200114d9c91aa7c8131aee80121bd9e5d9d5e5cdd81647ebcdd8164fb830037841ebf590cdf716cd1a17f1e177e5686119d9ebed4aeb7c8d6f1fadd9ebe11f30083e01cd1a17342823d97de680d923772b281f7bed443f5f7a2fce0057d97b2fce005f7a2fce0030071fd934ca8018d957d9af186c373534c823aecbfe2bc9afcdbc17d8d9e5d9d5ebcdbc17eb385ae5cdf71678a7ed62d9e5ed62d906211811300519d9ed5ad9d9cb1ccb1dd9cb1ccb1dd9cb18cb19d9cb191f10e4ebd9ebd9c1e178812001a73d3f173f1ff219183068a73c20083806d9cb7ad9205c77d978d930157ea73e802801afd9a2cd38170777382e23772b18290620d9cb7ad9201207cb13cb12d9cb13cb12d93528d710ea18d717300ccd41172007d91680d9342818e523d9d5d9c17817cb161f77237123722373e1d1d9e1d9c9cf05ebafcdbc1738f7ebcdbc17d8d9e5d9d5e5cdf716d9e56069d96168af06df181017cb11d9cb11cb10d929d9ed6ad93810ed52d9ed52d9300f19d9ed5ad9a71808a7ed52d9ed52d93704faa218f528e15f51d95950f1cb18f1cb18d9c1e17891c310187efe81300636003e201805d6a0f0ed44d5eb2b47cb38cb38cb38280536002b10fbe6072809473effcb2710fca677ebd1c900b00031003000f1490fdaa234202f1c721ae3194c17c6178218e21ded1af31a031b031b031b031b031b031b5517f81a031b031b031b031b031b031b621ba01a061ca41b111c491d3e1d6e1dc41dd41d761da91c5b1c461cdb1daf1aaa1abe1ac51ad51b8f1bd51af619371c231cfc19171cdb1ace1a2b00181de418e4195a157f1a511a631a451acd851b78321e40d9e3d9ed531c40d97e23e5a7f2c21957e6600f0f0f0fc6726f7ae61f180efe183008d901fbff545d09d9076f1123192600195e235621a719e3d5d9ed4b1d40c9f13a1e40d918c3d5e5010500cdc50ee1d1c9cdeb19edb0c9626bcdeb19d9e5d9e3c57ee6c007074f0c7ee63f2002237ec650123e059123130600edb0c1e3d9e1d947af05c8121318faa7c8f5d5110000cdfe19d1f13d18f24f0707814f060009c9d52a1f40cd3c1acdf619e1c9626bd9e5211519d9cd2d1acdfe19d9e1d9c9e5eb2a1f40cd3c1aebcdf619ebe1c906051a4eeb1271231310f7ebc947cda0192d0fc002a0c22de004e2c10334cdfc19cda4190f01c20231eee10334c97ea7c8237eee80772bc923cbbe2bc9237e2b353437c4e01a2307cb1e2bc9cda70e0ac31d15cda70e212015e5c5c97ea7c83eff18077eed443f1805af23ae2b07e5060536002310fbe1d03681c91aa7c83718ed1aa7c018e81aa7c0d51baf121b12d1c978d608cb5720013d0f3008f5e5cd721ad1ebf1cb5720070ff5cd4c1718330ff5cdf813d5c5cdf813e17cb5e378200bb1c12804f13f1816f11813b1280d1a96380920ed0b1323e32b18dfc1f1a7f5efa034f1f5dcd51acdce1af10fd4d51ac9cdf813d5c5cdf813e1e5d5c509444df7cdc312c1e178b12802edb0c1e178b12802edb02a1c4011fbffe519d1c9cdcd15380e200cf5010100f7f112cdc312ebc9cf0a2a1640e5cdf813d503f7e1ed531640d5edb0eb2b3676fdcb01becd920dcd220de1221640fdcb01fecd550fe122164018b0010100f736762a3940e52eff2239402a0e40e5ed530e40d5cddb15d12a0e40a7ed52444de1220e40e1223940cdc312ebc9cdf81378b128011ac31d15cdf813c32015d9e5211e4035e1200423d9c9d95eafcb7b28012f5719d9c91aa720f0d923d9c9efc0022de00524e001c00403e034c9ef2d3200043634c92d36c003e0012c0003a10334c9ef30f138aa3b29042d24c3032d0fa1038813365865669d786540a26032c9e721f7af24eb2fb0b014ee7ebb9458f13a7ef8cfe334cdcd1520073803863009cf053807963004ed4477c9ef02a034c9ef2d33000434cf09a002347e3680cd1d15ef30380003012d30f04ccccccd0333000801a103013434ef0130f0317217f80401a203a2032d30322004a2038c11ac140956daa55930c55c90aa9e706f61a1cbda96a4319fb4e7a0fe5cfcea1b43ca36eda79c7e5ef06e238093040f34c9ef30ee22f9836e042da20f24032d0f2d0f2d27a1032d33c000040234c9a103013200021834c9ef3527a103e00006182f03ef352d2d042d0fa1038614e65c1f0ba38f38eee91563bb23ee920dcdedf1235d1bea0434c9ef2d1c011d0534c97efe81380eefa11801052d32a3010006182f03efa0012d2d042d0fa1038c10b2130e55e48d5839bc5b98fd9e003675a0dbe8b46342c4e6b50936bee936731b5decd8de63bef061a1b30c040f34c9ef2d2d04a1031825a10f05212d0f34c9ef1fa3031834c9ef2d2c001ea234ef012d2c0007220434c35b1c022d2c0009a001330006a1010502a134c9ff0000000000000000f0f0f0f0000000000f0f0f0f00000000ffffffff0000000000000000f0f0f0f0f0f0f0f0f0f0f0f00f0f0f0ff0f0f0f0fffffffff0f0f0f0aa55aa55aa55aa5500000000aa55aa55aa55aa55000000000024240000000000001c227820207e0000083e283e0a3e080000001000001000003c42040800080000040808080804000020101010102000000010080408100000000408100804000000003e003e0000000008083e080800000000003e000000000014083e0814000000020408102000000010000010102000000000000808100000000000181800003c464a52623c000018280808083e00003c42023c407e00003c420c02423c0000081828487e0800007e407c02423c00003c407c42423c00007e020408101000003c423c42423c00003c42423e023c00003c42427e424200007c427c42427c00003c424040423c000078444242447800007e407c40407e00007e407c40404000003c42404e423c000042427e42424200003e080808083e000002020242423c0000444870484442000040404040407e000042665a42424200004262524a464200003c424242423c00007c42427c404000003c4242524a3c00007c42427c444200003c403c02423c0000fe1010101010000042424242423c00004242424224180000424242425a240000422418182442000082442810101000007e040810207e00";
// START src/js/zx81/mosaic.js
zx.mosaic = [
0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 
0xf0, 0xf0, 0xf0, 0xf0, 0x00, 0x00, 0x00, 0x00,
0x0f, 0x0f, 0x0f, 0x0f, 0x00, 0x00, 0x00, 0x00,
0xff, 0xff, 0xff, 0xff, 0x00, 0x00, 0x00, 0x00,

0x00, 0x00, 0x00, 0x00, 0xf0, 0xf0, 0xf0, 0xf0,
0xf0, 0xf0, 0xf0, 0xf0, 0xf0, 0xf0, 0xf0, 0xf0, 
0x0f, 0x0f, 0x0f, 0x0f, 0xf0, 0xf0, 0xf0, 0xf0,
0xff, 0xff, 0xff, 0xff, 0xf0, 0xf0, 0xf0, 0xf0,

0xaa, 0x55, 0xaa, 0x55, 0xaa, 0x55, 0xaa, 0x55,
0x00, 0x00, 0x00, 0x00, 0xaa, 0x55, 0xaa, 0x55,
0xaa, 0x55, 0xaa, 0x55, 0x00, 0x00, 0x00, 0x00
];
// START src/js/zx81/system.js
/**
 * 
 * @constructor
 */
zx.zx81 = function(surface, scale) {
	zx.system = this;
	zx.system.surface = surface;

	this.memory = Array.apply(null, Array(16 * 1024)).map(function (x, i) { return 0; })

	var d = [];
	for(var i=0;i<16*1024;++i) {
		d[i] = sgxAtox(zx.rom[i*2] + zx.rom[i*2+1]);
	}
	this.rom = d;
	this.mosaic = zx.mosaic;

	zx.peek = function(addr) {
		addr = addr & 0xffff;
		if (addr < 16 * 1024) {
			return this.rom[addr];
		}
		return this.memory[addr - 16 * 1024];
	}.bind(this);

	zx.poke = function(addr, value) {
		var ram_at = 8 * 1024;
		addr = addr & 0xffff;
		if (addr >= ram_at) {
			this.memory[addr - ram_at] = value;
			// @TODO: If in the screen area
			// @TODO : if 118 do a CR
		}
	}.bind(this);

	zx.usr = function(value) {};

	// Conceptually, any character >= 128 is a treated as a ZX81-specific one while
	// anything lower is ASCII. This allows us to use normal javascript,
	// e.g. var s = "hello" + zx.chr$(7)
	// with both JS-friendly stuff, and zx-specifics without them colliding
	zx.code = function(character) {
		var ascii = sgxASCII(character);
		if (ascii >= 128) {	// already in ZX
			return ascii;
		}

		ascii -= 32;

		if (ascii < 0 || ascii >= this.mapASCII2ZX.length) {
			ascii = 15;	// map to ?
		}
		var chr = this.mapASCII2ZX[ascii];
		return chr | 128;
	}.bind(this);

	// As a consequence of creating the ZX/non-ZX division, we have everything from chr$
	// as a ZX-character
	zx.chr$ = function(code) {
		return sgxToCharacter(code | 128);
	};

	zx.inverse = function(text) {
		var output = "";
		for(var i=0;i<text.length;++i) {
			output += zx.chr$(zx.code(text[i]) + 64);
		}
		return output;
	}.bind(this);


	this.scale = scale || 1;
	this.timecum = 0;

	this.zxWidth = 32;
	this.zxHeight = 24;
	this.zxWidthPixels = 32*8;
	this.zxHeightPixels = 24*8;
	var zxwidth = this.zxWidth * 8 * this.scale;
	var zxheight = this.zxHeight * 8 * this.scale;

	this.screenRC = new sgxRect2f();
	this.screenRC.top = (surface.getHeight() - zxheight) / 2;
	this.screenRC.left = (surface.getWidth() - zxwidth) / 2;
	this.screenRC.right = this.screenRC.left + zxwidth;
	this.screenRC.bottom = this.screenRC.top + zxheight;

	this.border = [];
	this.border[0] = new sgxRect2f(0,0, surface.getWidth(), this.screenRC.top);// top
	this.border[1] = new sgxRect2f(0,this.screenRC.top, this.screenRC.left, surface.getHeight()-this.screenRC.top);// left
	this.border[2] = new sgxRect2f(this.screenRC.left+zxwidth,this.screenRC.top, surface.getWidth()-(this.screenRC.left+zxwidth), surface.getHeight()-this.screenRC.top);//right
	this.border[3] = new sgxRect2f(this.screenRC.left,this.screenRC.top+zxheight, zxwidth, surface.getHeight()-(this.screenRC.top+zxheight));
	

	// !"#$%&'()*+,-./
	//0123456789
	//:;<=>?@
	//AB...
	//[\]^_`
	//abcde..
	//{|}~
	var NIL=15;
	this.mapASCII2ZX = [
		0, NIL, 11,12,13,NIL,NIL,11,16,17,23,21,26,22,27,24,
		28,29,30,31,32,33,34,35,36,37,
		14,25,19,20,18,15,NIL,
		38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,
		NIL,NIL,NIL,NIL,NIL,NIL,
		38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,
		NIL,NIL,NIL,NIL,NIL,		
	];
	// A = zx.38 = asc.65
	// a = zx.38+64 = asc.102
	for(var i=0;i<64;++i) {
		//this.mapASCII2ZX[i] = this.mapASCII2ZX[i-97+38] + 64;
		//this.mapASCII2ZX[i+102-38-32] = this.mapASCII2ZX[i+38] + 64;
	}

	this.gfxBlack = zx.udg([0,0,0,0,0,0,0,0]);

	this.palette = [[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]];

	this.font = [];
	for(var i=32;i<128;++i) {
		this.font[i-64] = zx.Texture.create8x8(this.rom, 0x1d00 + (i-32)*8);
		this.font[i] = zx.Texture.create8x8(this.rom, 0x1d00 + (i-32)*8, true);
	}

	for(var i=0;i<11;++i) {
		this.font[i] = zx.Texture.create8x8(this.mosaic, i*8);
		this.font[i+64] = zx.Texture.create8x8(this.mosaic, i*8, true);
	}

	this.screen = new zx.screen(this);
	this.audio = new zx.audio(this);
}

zx.zx81.prototype.cls = function() {
	this.surface.setFillColor(sgxColorRGBA.White);
	this.surface.setFillTexture(NULL);
	this.surface.fillRect(this.screenRC);
}

zx.zx81.prototype.updateCharacter = function(chr, udg) {
}

zx.zx81.prototype.getCharacterWidth = function(chr) {
	var t = this.getCharacterTexture(chr);
	return t ? t.getWidth() : 0;
}

zx.zx81.prototype.getCharacterHeight = function(chr) {
	var t = this.getCharacterTexture(chr);
	return t ? t.getHeight() : 0;
}


zx.zx81.prototype.getCharacterTexture = function(chr) {

	if (chr < 128) {
		// Map ASCII to our font
		// e.g. space = asc:32 = 0, " = asc 34 : 11
		chr = this.mapASCII2ZX[chr - 32];

	} else {	// we're in ZX-format
		chr = chr - 128;
	}

	var texture =  this.font[chr];

	if (chr < 0 | chr >= this.font.length || !this.font[chr]) {
		return this.font[15];	// The ? symbol
	}

	return this.font[chr];
}


zx.zx81.prototype.drawCharacter = function(chr, attr, x, y) {
	return this.drawWith(this.getCharacterTexture(chr), attr, x, y);
}



zx.zx81.prototype.drawWith = function(gfx, attr, x, y) {
	if (gfx === undefined || attr === undefined) {
		return;
	}
	
	var switch_colours = attr.flash && (this.flashPulse != attr.inverse);
	var width = gfx.paper.getWidth();
	var height = gfx.paper.getHeight();
	var rc = new sgxRect2f(this.screenRC.left + x*this.scale, this.screenRC.top + y*this.scale, width*this.scale, height*this.scale);

	this.surface.setClipRect(this.screenRC);
	this.surface.setFillColor(sgxColorRGBA.Black);
	this.surface.setFillTexture(gfx.ink);
	this.surface.fillRect(rc);
}
// @todo recomputeSurface(surface);
// @todo use surface

zx.zx81.prototype.draw = function(surface) {
	this.surface.setFillColor(sgxColorRGBA.White);
	this.surface.setFillTexture(NULL);
	
	this.surface.setClipRect(NULL);
	for(var i=0;i<4;++i) {
		this.surface.fillRect(this.border[i]);
	}
}

// http://www.worldofzx81.org/ZXBasicManual/zxmanchap17.html
zx.zx81.prototype.plot = function(x, y) {
	this.surface.setClipRect(this.screenRC);

	if (x >= 0 && y >= 0 && x < 64 && y < 44) {
		var rc = new sgxRect2f();
		rc.left = this.toX(sgxFloor(x)*4);
		rc.top = this.toY(sgxFloor(44-y)*4);

		rc.right = rc.left + 4*this.scale;
		rc.bottom = rc.top + 4*this.scale;

		this.surface.setFillTexture(this.font[64].ink);
		this.surface.fillRect(rc);
	}
}

zx.zx81.prototype.drawPoint = function(x, y) {
}

zx.zx81.prototype.toX = function(x) {
	return this.screenRC.left + x*this.scale;
}

zx.zx81.prototype.toY = function(y) {
	return this.screenRC.top + y*this.scale;
}

zx.zx81.prototype.drawLineWith = function(attr, x1, y1, x2, y2) {
}

zx.zx81.prototype.drawLine = function(x1, y1, x2, y2) {
}

zx.zx81.prototype.circle = function(x, y, r) {
}


zx.zx81.prototype.update = function(telaps) {
}

zx.zx81.prototype.getRGB = function(index, bright) {}

zx.zx81.prototype.setBorderColor = function(colour) {}
zx.zx81.prototype.setInkColor = function(colour) {}
zx.zx81.prototype.setPaperColor = function(colour) {}
zx.zx81.prototype.setBright = function(bright) {}
zx.zx81.prototype.setFlash = function(flash) {}
// START src/js/texture.js

zx.Texture = function(width, height, data, offset, inverse) {
	this.ink = this.createtexture(width, height, 1, data, offset, inverse);
	this.paper = this.createtexture(width, height, 0, data, offset, inverse);
}

zx.Texture.create8x8 = function(data, offset, inverse) {
	return new zx.Texture(8, 8, data, offset, inverse);
}

zx.Texture.create16x16 = function(data, offset, inverse) {
	return new zx.Texture(16, 16, data, offset, inverse);
}


zx.Texture.prototype.getWidth = function() {
	return this.ink.getWidth();
}

zx.Texture.prototype.getHeight = function() {
	return this.ink.getHeight();
}

zx.Texture.prototype.createtexture = function(width, height, ink_not_paper, data, offset, inverse) {
	var texture = sgx.graphics.TextureManager.get().create("", width, height);
	var imageData = [];
	texture.lock(imageData);
	var bitmap = imageData.pBitmap_;

	var bit = 0;
	var shift = 7;
	var xpos = 0;
	var pi = 0;
	var setbit = inverse ? 0 : 1;
	var clrbit = inverse ? 1 : 0;

	var idx = offset - 1;
	for(var i=0;i<width*height;++i) {
		bit >>= 1;
		if (bit == 0) {
			bit = 0x80;
			++idx;
		}

		var isset = (data[idx] & bit) ? setbit : clrbit;

		bitmap[pi + 0] = bitmap[pi + 1] = bitmap[pi + 2] = isset==ink_not_paper?0xff:0;
		bitmap[pi + 3] = isset==ink_not_paper ? 0xff : 0;
		pi += 4;
	}

	texture.unlock(imageData);

	texture.clearRegions();
	texture.addPixelRegion(0,0,width,height);

	return texture;
}
// START src/js/libstd.js
zx.TO = "TO";
zx.SEMICOLON = ';';

zx.bin = function(binary) {
	if (binary.substring(0,1) == "%") {
		binary = binary.substring(1);
	}
	return parseInt(binary, 2);
}

zx.hex = function(hex) {
	if (hex.substring(0,2) == "0x" || hex.substring(0,2) == "0X") {
		hex = hex.substring(2);
	} else if (hex.substring(0,1) == "$" || hex.substring(0,1) == "#") {
		hex = hex.substring(1);
	}
	return parseInt(binary, 16);
}

zx.pause = function(seconds) {
// was 'number of frames of TV signal'
	var currentTime = new Date().getTime();

	while (currentTime + 1000*seconds >= new Date().getTime()) {
		// nop
	}
}

zx.inkey$ = function() {
// @todo
	return "";
}

zx.copy = function() {
	// @TODO Grab surface and upload to imgur
}


// START src/js/libmath.js


zx.abs = function(v) {
	return sgxAbs(v);
}

zx.acs = function(v) {
	return sgxACos(v);
}

zx.asn = function(v) {
	return sgxASin(v);
}

zx.atn = function(v) {
	return sgxAtan(v);
}


// Spectrum only!?
zx.code = function(v) {
	if (v === undefined || v == '') {
		return 0;
	}
	return sgxASCII(v[0]);
}

zx.cos = function(v) {
	return sgxCos(v);
}


zx.ln = function(v) {
// @todo
	return sgxLn(v);
}

zx.randomize = function(v) {
// @todo
	sgxRand(v === undefined ? 0:v);
}

zx.rnd = function() {
	return sgxRand();
}

zx.sgn = function(v) {
	return sgxSgn(v);
}

zx.sqr = function(v) {
	return sgxSqr(v);
}

zx.sin = function(v) {
	return sgxSin(v);
}

zx.pi = function() {
	return SGX_PI;
}

zx.int = function(v) {
	return sgxFloor(v);
}

zx.exp = function(v) {
	// @todo : calculate e ^ v
   return sgxExp(v);
}


// START src/js/libstring.js

zx.code = function(character) {
	return sgxASCII(character);
}

zx.chr$ = function(code) {
	return sgxToCharacter(code);
}

zx.inkey$ = function() {
// @todo
	return "";
}

zx.len = function(v) {
	return sgxStrlen(v);
}


zx.val = function(v) {
	return sgxAtoi(v);
}

zx.val$ = function(v) {
	return "" + sgxAtoi(v);
}

zx.str$ = function(v) {
	return sgxToCharacter(v);
}



zx.$ = function(value, a, b, c) {
	// An equivalent to RESULT = VAR$(x TO y) where x and y are optional
	
	// If only the var is given, we probably want to just return the var
	// as it doesn't make sense
	if (a === undefined) {
		return value;
	}


	// First param is TO, so this means 'start from the beginning'
	if (a === zx.TO) {
		first = 0;
		if (b === undefined) {		// $(v,TO) - i.e. all of it
			return value;
		} else {					// $(v,TO,4) - LEFT$
			return value.substr(0, b);
		}
	} else {
		if (b === undefined) {		// $(v,1) - single character
			return value.substr(a, 1);
		} else if (b != zx.TO) {	// $(v,1,3) - non-standard, but assume range
			return value.substr(a, b-a);
		} else if (c === undefined) {	// $(v,1,TO)	- 1st character given
			return value.substr(a);
		} else {					// $(v,1,TO,3)	- 1st & last characters given
			return value.substr(a, c-a);
		}
	}

	// assert
	return "";
}

// START src/js/libgfx.js

zx.udg = function(a,b,c,d,e,f,g,h) {
	if( Object.prototype.toString.call( a ) === '[object Array]' ) {
		if (b === undefined) {
			b = 0;
		}
		return zx.Texture.create8x8(a, b);
	} else {
		return zx.Texture.create8x8([a,b,c,d,e,f,g,h], 0);
	}
}


// START src/js/attribute.js

function zxAttribute(attr) {
	this.ink = attr & 0x07;
	this.paper = (attr & 0x38) >> 3;
	this.bright = (attr & 0x40) ? 1 : 0;
	this.flash = attr & 0x80;
	this.inverse = false;
	//
	this.inkColor = new sgxColorRGBA();
	this.paperColor = new sgxColorRGBA();
	//
	this.recompute();
}

zxAttribute.prototype.setBright = function(state) {
	this.bright = state ? 1 : 0;
	this.recompute();
}

zxAttribute.prototype.setInk = function(color) {
	this.ink = color & 0x07;
	this.recompute();
}

zxAttribute.prototype.setPaper = function(color) {
	this.paper = color & 0x07;
	this.recompute();
}

zxAttribute.prototype.setFlash = function(flash) {
	this.flash = flash ? true : false;
}

zxAttribute.prototype.recompute = function() {
	this.inkColor = new sgxColorRGBA(zx.system.palette[this.ink][this.bright]);
	this.paperColor = new sgxColorRGBA(zx.system.palette[this.paper][this.bright]);
}
	
// START src/js/audio.js
/**
 * 
 * @constructor
 */
zx.audio = function(system) {
	this.system = system;
    this.audioCtx = new(window.AudioContext || window.audioContext || window.webkitAudioContext);

    zx.beep = this.beep.bind(this);
}

zx.audio.prototype.beep = function(duration, pitch) {
    // The duration is given in seconds, and the pitch is given in semitones above middle C using negative numbers for notes below middle C.

	var oscillator = this.audioCtx.createOscillator();
    var gainNode = this.audioCtx.createGain();

    oscillator.connect(gainNode);
    gainNode.connect(this.audioCtx.destination);

	var key = pitch + 60;
	var frequency = 440 * Math.pow(2, (key-69) / 12);
    var volume = undefined;
    var callback = undefined;
    var type;

    if (volume){gainNode.gain.value = volume;};
    if (frequency){oscillator.frequency.value = frequency;}
    if (type){oscillator.type = type;}
    if (callback){oscillator.onended = callback;}

    oscillator.start();
    zx.pause(duration * 0.9);
    oscillator.stop();

    zx.pause(duration * 0.1);

    return this;
}
// START src/js/screen.js

/**
 * 
 * @constructor
 */
zx.screen = function(system) {
	this.system = system;

	this.afile = [];
	this.scrfile = [];
	for(var i=0;i<32*24;++i) {
		this.afile.push(0);//todo new zx.attribute());
		this.scrfile.push("");
	}

	this.state = {};
	this.currentAttribute = new zxAttribute(0x7);

	this.ink(zx.WHITE);
	this.paper(zx.BLACK);

	this.cls();
}

zx.screen.prototype.drawWith = function(gfx, attr, x, y) {
	this.system.drawWith(gfx, attr, x, y);
};

zx.screen.prototype.setAttribute = function(attr, x, y) {
if (typeof (attr) === 'zx.attribute') {
this.afile[x + y*32] = attr;
} else {
this.afile[x + y*32] = new zxAttribute(attr);
}

}

zx.screen.prototype.setScreen = function(chr, x, y) {
this.scrfile[x + y*32] = chr;
}


zx.screen.prototype.cls = function() {
this.system.cls();

for(var y=0;y<24;++y) {
for(var x=0;x<24;++x) {
this.setAttribute(new zxAttribute(0x7), x, y);
this.setScreen(' ', x, y);
}
}

this.lastX = this.lastY = 0;
this.lastPrintX = this.lastPrintY = 0;
}


// ink 8 and paper 8 are transparent : i.e. don't change the attrMap when writing text/plotting
// these are part of the screen state

// TODO: http://www.worldofspectrum.org/ZXBasicManual/zxmanchap16.html

zx.screen.prototype.border = function(colour) {
	this.system.setBorderColor(colour);
	return this;
}

zx.screen.prototype.ink = function(ink) {
	this.system.setInkColor(ink);
	// TODO remove current, and getInk
	this.currentAttribute.setInk(ink);
	return this;
}

zx.screen.prototype.paper = function(paper) {
	this.system.setPaperColor(paper);
	this.currentAttribute.setPaper(paper);
	return this;
}

zx.screen.prototype.bright = function(bright) {
	this.system.setBright(bright);
	this.currentAttribute.setBright(bright);
	return this;
}

zx.screen.prototype.flash = function(flash) {
	this.system.setFlash(flash);
	this.currentAttribute.setFlash(flash);
	return this;
}

zx.screen.prototype.plot = function(x, y) {
	// 0,0 is bottom left
	// draw in ink/paper with inverse/over
	// http://www.worldofspectrum.org/ZXBasicManual/zxmanchap17.html

	// @todo also on circle/draw
	var nx = sgxFloor(x/8);
	var ny = sgxFloor(y/8);
	this.setScreen('', nx, ny);

	this.system.plot(x, y);

	this.lastX = x;
	this.lastY = y;
}

zx.screen.prototype.draw = function(x, y) {
	// 0,0 is bottom left. 
	// Draws relative to last position
	this.system.drawLineWith(this.currentAttribute, this.lastX, this.lastY, this.lastX+x, this.lastY+y);
	this.lastX += x;
	this.lastY += y;
}

zx.screen.prototype.circle = function(x, y, r) {
	// 0,0 is bottom left
	this.system.drawCircle(x, y, r);

	this.lastX = x;
	this.lastY = y;
}



zx.screen.prototype.print = function(text, flags) {
	this.printAt(this.lastPrintY/8, this.lastPrintX/8, text, flags);
	return this;
}

zx.screen.prototype.printAt = function(y, x, text, flags) {
	// Lines are numbered from 0 (at the top) to 21, and columns from 0 (on the left) to 31.
	this.printFineAt(y * 8, x * 8, text);

	if (flags != zx.SEMICOLON) {
		this.lastPrintX = 0;
		this.lastPrintY += 8;
	}
	return this;
}

zx.screen.prototype.printFineAt = function(ypos, xpos, text) {
	if (!text) {	// blank line
		return;
	}

	var length = text.length;
	var x = xpos;
	var y = ypos;
// todo: setclip to non-border
	for(var i=0;i<text.length;++i) {
// NOTE: These characters are drawn in the current ink/paper settings
// NOTE: TODO: Add screen.paper(7) methods to change current state
// TODO: Each character written affects the attrmap
		var chr = zx.code(text[i]);
		this.system.drawCharacter(chr, this.currentAttribute, x, y);
		var width = this.system.getCharacterWidth(chr);
		x += width;	

		if (x >= 256) {
			x -= 256;
			y += this.system.getCharacterHeight(chr);

			// Re-draw if there's any overlap from RHS to LHS
			if (x && x < width) {
				this.system.drawCharacter(chr, this.currentAttribute, x-width, y);
			}			
		}
		
	}

	this.lastPrintX = x;
	this.lastPrintY = y;

	return this;
}


zx.screen.prototype.tab = function(column) {
	if (column*8 < this.lastPrintX) {
		this.lastPrintX = 0;
		this.lastPrintY += 8;
	}
	var spacing = (column % 31) - this.lastPrintX/8;
	// prints enough spaces to move the PRINT position to the column specified. 
	// It stays on the same line. or, if this would involve backspacing, moves on to 
	// the next one. Note that the computer reduces the column number 'modulo 32' 
	// (it divides by 32 and takes the remainder); so TAB 33 means the same as TAB 1.

	var spaces = " ".repeat(spacing);
	this.print(spaces, zx.SEMICOLON);
	return this;
}


