// Nodelinks By GududaoStudio ver 2.0 (Final Version)
// Release 2026/04/30
// Use in Cloudflare Workers
addEventListener('fetch', event => {
    event.respondWith(handleRequest(event.request))
  })
  
  const PASSWORD = 'yourkey' // password setting
  
	function base64ToText(base64String) {
		try {
			const binaryString = atob(base64String);
			const textDecoder = new TextDecoder('utf-8');
			return textDecoder.decode(new TextEncoder().encode(binaryString));
		} catch (error) {
			return 'vless://66666666-6666-6666-6666-666666666666@1.1.1.1:166?fp=random&host=cloudflare.com&path=%2F&security=tls&sni=cloudflare.com&type=ws#DecodeError';

		}
	}

  
  async function handleRequest(request) {
    const url = new URL(request.url)
    const mode = url.searchParams.get('mode')
    const key = url.searchParams.get('key')
  
    // password check
    if (key !== PASSWORD) {
      return new Response(
        '<!DOCTYPE html><html><body style="text-align:center;background: #912423;"><h1><span style="color:#FFFFFF">ACCESS DENIED</span></h1></body></html>',
        {
          status: 403,
          headers: {
            'Content-Type': 'text/html;charset=UTF-8'
          }
        }
      );
    }
  

    // mode required
    if (!mode) {
      return new Response(
        '<!DOCTYPE html><html><body><p>ACCESS DENIED</p></body></html>',
        {
          status: 403,
          headers: {
            'Content-Type': 'text/html;charset=UTF-8'
          }
        }
      );
      }
  
    try {
      let content = ''
  
      if (mode === '1') {
        // You can collect RAW nodes
        const res = await fetch('https://example.com/nodes/rawnodes.txt')
        const text0 = 'protocol://your-own-link-1'
        const text1 = 'protocol://your-own-link-2'
        const text2 = await res.text()
        content = text0 + '\n'+ text1 + '\n' + text2
  
      } else if (mode === '2') {
        // Also can get ENCRYPTED nodes
        const res = await fetch('https://example.com/nodes/encryptednodes.txt')
        const text0 = 'protocol://your-own-link-1'
        const text1 = 'protocol://your-own-link-2'
        const text2 = await res.text()
        content = text0 + '\n'+ text1 + '\n' + text2
  
      } else if (mode === '3') {
        // Mixed one is allowed
        const res0 = await fetch('https://example.com/nodes/encryptednodes.txt')
        const text2 = await res0.text()
        const res1 = await fetch('https://example.com/nodes/encryptednodes.txt')
        const text3 = await res1.text()
        const text0 = 'protocol://your-own-link-1'
        const text1 = 'protocol://your-own-link-2'
        content = text0 + '\n'+ text1 + '\n' + text2 + '\n' + text3

      } else {
        return new Response(
        '<!DOCTYPE html><html><body><p>ACCESS DENIED</p></body></html>',
        {
          status: 403,
          headers: {
            'Content-Type': 'text/html;charset=UTF-8'
          }
        }
      );
      }
  
      return new Response(content, {
        status: 200,
        headers: { 'Content-Type': 'text/plain;charset=UTF-8' },
      })
  
    } catch (err) {
      return new Response(
        '<!DOCTYPE html><html><body><p>SYSTEM ERROR</p></body></html>',
        {
          status: 500, 
          headers: {
            'Content-Type': 'text/html;charset=UTF-8'
          }
        }
      );
      }
  }
  
