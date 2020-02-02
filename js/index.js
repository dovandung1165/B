//sroll to top
document.querySelector('.up').addEventListener('click', (event) => {
    document.querySelector('#main-container').scrollIntoView({ behavior: "smooth" })
})
//set lang Vietnamese
// header
const VI =
    [
        'Shapely Demo',
        'Trang chủ',
        'Blog',
        'Về chúng tôi',
        'Thông tin',
        'Cửa hàng',
        'Địa chỉ',
        'Liên hệ',
        '<i class="fas fa-search"></i>'
    ]
// p
const pVI =
    [
        'Đây là chủ đề thuần khiết mà bạn muốn sử dụng.',
        'Chúng tôi mang đến lợi thế cho bạn về SEO, giúp cho trang web của bạn dễ dàng được tìm thấy bởi các công cụ tìm kiếm như google, bing theo yêu cầu của bạn.',
        'Những bức ảnh đẹp được sưu tầm từ các nguồn chất lượng, một nhiếp ảnh gia sẽ giúp bạn có những tấm hình ưng ý nếu bạn muốn điều đó.',
        'Trang web được sử dụng công nghệ Parralax giúp cho trang web có những chuyển động mượt mà, những dòng chữ lướt trên website như những con sóng.',
        'Những kết quả gần đây của chúng tôi cho thấy xu hướng về sự đơn giản đang được đẩy lên cao. Và chúng tôi đang làm tốt điều đó.',
        'Đây là một số bức ảnh của các dự án. Bạn sẽ yêu thích nó!',
        'Thật tuyệt vời, Tôi rất hài lòng về chất lượng và dịch vụ mà họ đem lại. Mọi thứ đều rất ổn, website được thiết kế đơn giản, đẹp mắt và phù hợp với chủ đề mà chúng tôi yêu cầu.'
    ]
// h1
const h1VI =
    [
        'Chúng tôi thay đổi mọi thứ',
        'Ứng dụng parraxlax website',
        'Phản hồi của khách hàng'
    ]
// h3
const h3VI =
    [
        'Thân thiện SEO',
        'Giới thiệu đẹp mắt',
        'Nhiều tùy chọn',
        'Dự án mới nhất của chúng tôi',
        'Công nghệ chính của chúng tôi',
        'Bạn có thích chủ đề này ?'
    ]
// button
const btnVI =
    [
        'Đọc thêm',
        'Tải về',
        'Đọc thêm',
        'Bấm vào để xem thêm',
        'Thông tin thêm',
        'Tải về ngay',
        'Tải về ngay',
        'Tải về ngay'
    ]
// vi click
document.querySelector('.vi').addEventListener('click', () => {
    const mainNav = document.querySelectorAll('a');
    const p = document.querySelectorAll('.main-container p');
    const h1 = document.querySelectorAll('h1');
    const h3 = document.querySelectorAll('h3');
    const btn = document.querySelectorAll('.btn');
    // header
    for (let i = 0; i < mainNav.length; i++) {
        mainNav[i].innerHTML = VI[i];
    }
    // p
    for (let i = 0; i < p.length; i++) {
        p[i].innerHTML = pVI[i];
    }
    // h1
    for (let i = 0; i < h1.length; i++) {
        h1[i].innerHTML = h1VI[i];
    }
    // h3
    for (let i = 0; i < h3.length; i++) {
        h3[i].innerHTML = h3VI[i];
    }
    // button
    for (let i = 0; i < btn.length; i++) {
        btn[i].innerHTML = btnVI[i];
    }
})
// set lang EN
document.querySelector('.en').addEventListener('click', () => {
    event.preventDefault();
    location.reload();
})