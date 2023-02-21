export async function getFaucet(data) {
  if (!data?.wallet || data?.wallet == '') return
    fetch('http://137.184.172.18:8888/v1/faucet', {
      method: 'POST',
      mode: 'no-cors',
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': 'http://137.184.172.18:8888/v1/faucet'
      },
      body: JSON.stringify({
        wallet: data?.wallet,
        tokens: data?.tokens,
        chainId: data?.chainId
      }),
    }).catch()
 }
