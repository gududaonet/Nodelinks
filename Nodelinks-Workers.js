// Nodelinks By GududaoStudio ver 0.0.1
// Release 2025/12/20
// Use in Cloudflare Workers
addEventListener('fetch', event => {
    event.respondWith(handleRequest(event.request))
  })
  
  const PASSWORD = 'yourpassword' // password setting
  
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
        // mode1:safe mode(only for nodes link like "vmess://" in each line)
        const res = await fetch('https://example.com/nodes/getnodes.txt')
        const text0 = 'vmess://your-own-link-1'
        const text1 = 'vmess://your-own-link-2'
        const text2 = await res.text()
        content = text0 + '\n'+ text1 + '\n' + text2
  
      } else if (mode === '2') {
        // mode2: third-part service
        const res = await fetch('https://example.com/nodes?link1=xxx&link2=xxx')
        const text0 = await res.text()
        content = text0
  
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
  
