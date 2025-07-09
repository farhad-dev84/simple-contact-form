// html گرفتن فرم از
const form = document.getElementById("contactForm") ;

// گرفتن المنت های ورودی
const nameInput = document.getElementById("name") ;
const emailInput = document.getElementById("email") ;
const messageInput = document.getElementById("message") ;

// محل نمایش پیام موفقیت
const responseMessage = document.getElementById("responseMessage") ;

// رویداد ارسال فرم
form.addEventListener("submit" , function(e) {
  // جلوگیری از ارسال پیشفرض فرم
  e.preventDefault() ;
  
  // گرفتن مقادیر از ورودی ها
  const name = nameInput.value.trim() ;
  const email = emailInput.value.trim() ;
  const message = messageInput.value.trim() ;
  
  // بررسی اعتبارسنجی
  if(name === "" || email === "" || message === "") {
    alert("لطفا تمام فیلد ها را پر کنید !");
    return ;
  }
    
    if(!email.includes("@")) {
      alert(" !ایمیل وارد شده معتبر نیست") ;
      return ;
    }
    
    // اگر همه چیز اوکی بود پیتم موفقیت را نمایش بده
      responseMessage.textContent = "پیام شما با موفقیت ارسال شد ✅";
      
      // پاک کردن ورودی ها
      nameInput.value = "" ;
      emailInput.value = "" ;
      messageInput.value = "" ;
}) ;

