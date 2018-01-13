function syntaxHighlights() 
{ var ca = document.getElementsByTagName("code"); 
for(var i=0; i < ca.length; i++)
{ var data = ca[i].innerHTML; 
 data = data.replace(/"(.*?)"/g, '<span class="code-str">&quot;$1&quot;</span>');
 data = data.replace(/'(.*?)'/g, '<span class="code-str">&apos;$1&apos;</span>');
 data = data.replace(/#(.*)/g, '<span class="code-comment">#$1</span>'); 
 data = data.replace(/0x(.*)/g, '<span class="code-str">0x$1</span>'); 
 data = data.replace(/from/g, '<span class="code-key">from</span>');
 data = data.replace(/import/g, '<span class="code-key">import</span>');
 data = data.replace(/pwn/g, '<span class="code-spec">pwn</span>');
 data = data.replace(/snprintf/g, '<span class="code-brown">snprintf</span>');
 data = data.replace(/print/g, '<span class="code-brown">print</span>');
 ca[i].innerHTML = data; 
} 

} 
window.addEventListener("load", syntaxHighlights); 
