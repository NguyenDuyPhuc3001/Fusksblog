const posts = [
  {
    title: "Giới thiệu về Java",
    date: "2025-10-18",
    image: "images/java-intro.jpg",
    description: "Tổng quan về ngôn ngữ Java và cách nó được sử dụng trong lập trình hướng đối tượng.",
    content: `
      <p>Chào mọi người, hôm nay chúng ta sẽ nói về Java, một "cây đại thụ" không thể không nhắc đến trong thế giới lập trình, ra đời từ năm 1995 bởi Sun Microsystems, nay thuộc về Oracle. Điều làm nên danh tiếng và sức mạnh trường tồn của ngôn ngữ hướng đối tượng này chính là khẩu hiệu “Write Once, Run Anywhere” — viết một lần, chạy ở mọi nơi, một triết lý được hiện thực hóa nhờ vào JVM (Java Virtual Machine), cỗ máy ảo cho phép code Java vận hành mượt mà trên mọi hệ điều hành mà không cần biên dịch lại, một lợi thế cực kỳ lớn. Java không chỉ dừng lại ở một ngôn ngữ, nó là nền tảng vững chắc cho mọi thứ từ việc phát triển ứng dụng Android, xây dựng các hệ thống backend mạnh mẽ, phức tạp cho các doanh nghiệp lớn, cho đến việc phát triển game hay các giải pháp IoT và Cloud. Dù có nhiều ngôn ngữ mới nổi, Java vẫn giữ vững vị thế là lựa chọn tin cậy cho những dự án đòi hỏi tính ổn định, quy mô lớn và khả năng mở rộng cao, chứng minh rằng những nguyên tắc lập trình hướng đối tượng cổ điển vẫn luôn là cốt lõi.</p>
    `
  },
  {
    title: "JavaScript là gì?",
    date: "2025-10-19",
    image: "images/js-intro.jpg",
    description: "Giải thích JavaScript là gì, tại sao nó quan trọng trong phát triển web.",
    content: `
      <p>Giờ thì chúng ta hãy nói về JavaScript (JS), ngôn ngữ được mệnh danh là "linh hồn của Web" và là một trong những kỹ năng hot nhất hiện nay. Ra đời với mục đích ban đầu là giúp các trang web không còn là những văn bản tĩnh mà trở nên tương tác và linh hoạt, JS đã làm thay đổi hoàn toàn cách chúng ta trải nghiệm Internet. Sức mạnh cốt lõi của JS nằm ở khả năng chạy trực tiếp trên trình duyệt, cho phép nó thao túng và thay đổi tức thì nội dung HTML, kiểu dáng CSS, cũng như xử lý mọi sự kiện từ người dùng và gửi các request dữ liệu mà không cần tải lại trang. Quan trọng hơn, ngày nay, JS không còn bị giới hạn trong trình duyệt nữa; nhờ có Node.js, JS đã "xâm chiếm" cả thế giới lập trình backend, cho phép các Dev dùng chung một ngôn ngữ cho cả frontend và backend. Thêm vào đó, các framework đình đám như React, Vue, và Angular đã biến JS thành công cụ không thể thiếu để xây dựng những giao diện người dùng hiện đại, phức tạp và có hiệu năng cao. Tóm lại, JS là ngôn ngữ đa năng, là nền tảng của mọi ứng dụng web hiện đại và là lựa chọn vàng cho các Full-stack Developer.</p>
    `
  },
  {
    title: "So sánh Java và JavaScript",
    date: "2025-10-20",
    image: "images/java-vs-js.jpg",
    description: "Hai ngôn ngữ khác nhau nhưng thường bị nhầm lẫn. Bài viết này giúp bạn phân biệt rõ.",
    content: `
      <p>nghe có vẻ anh em, nhưng Java và JavaScript là hai cá thể hoàn toàn khác biệt, cứ như xe hơi và thảm chùi chân có cùng chữ "Car" vậy! Về cơ bản, Java là ngôn ngữ biên dịch (compiled), yêu cầu phải chạy trên JVM (Java Virtual Machine), được xây dựng theo triết lý hướng đối tượng mạnh (Strict OOP), khiến nó trở thành lựa chọn lý tưởng cho các hệ thống lớn, cần hiệu năng và tính bảo mật cao. Ngược lại, JavaScript lại là ngôn ngữ thông dịch (interpreted), chủ yếu chạy thẳng trên trình duyệt (hoặc Node.js), có tính chất linh hoạt và nhẹ hơn (dynamic/loosely typed), sinh ra để thao túng DOM và tạo ra tính tương tác cho người dùng. Tóm lại, cả hai đều giữ vị thế hàng đầu và cực kỳ phổ biến trong thế giới công nghệ, nhưng chúng giải quyết những bài toán khác nhau và hoạt động trên những nền tảng khác nhau, do đó, Dev cần nắm rõ sự khác biệt này để chọn công cụ phù hợp cho từng dự án.</p>
    `
  },
  {
    title: "Lập trình hướng đối tượng trong Java",
    date: "2025-10-21",
    image: "images/oop-java.jpg",
    description: "Giới thiệu các khái niệm cốt lõi của OOP trong Java như Class, Object, Inheritance, Polymorphism.",
    content: `
      <p>OOP (Object-Oriented Programming) hay Lập trình hướng đối tượng. OOP không chỉ là một khái niệm học thuật, nó là kim chỉ nam giúp chúng ta tổ chức mã nguồn một cách có cấu trúc, dễ bảo trì và đặc biệt là khả năng tái sử dụng cao, biến những dòng code phức tạp thành những thực thể gần gũi như trong thế giới thực. Trong OOP, mọi thứ đều xoay quanh Class, một khuôn mẫu hay bản thiết kế, từ đó chúng ta tạo ra các Object, chính là những thực thể cụ thể hoạt động trong chương trình của bạn. Để mở rộng chức năng mà không phải viết lại từ đầu, chúng ta có nguyên lý Inheritance (Kế thừa), cho phép một Class con thừa hưởng mọi đặc tính từ Class cha. Và đỉnh cao của sự linh hoạt trong OOP chính là Polymorphism (Đa hình), nguyên lý cho phép một Object có thể đảm nhận và xử lý nhiều hình thái, hành vi khác nhau dựa trên ngữ cảnh, biến code của bạn trở nên uyển chuyển và mạnh mẽ hơn bao giờ hết.</p>
      <ul>
        <li><strong>Class</strong>: Khuôn mẫu cho đối tượng.</li>
        <li><strong>Object</strong>: Thực thể cụ thể được tạo từ Class.</li>
        <li><strong>Inheritance</strong>: Kế thừa, giúp mở rộng chức năng.</li>
        <li><strong>Polymorphism</strong>: Đa hình, cho phép đối tượng có nhiều hình thái.</li>
      </ul>
    `
  },
  {
    title: "ES6 trong JavaScript",
    date: "2025-10-22",
    image: "images/es6-js.jpg",
    description: "Tổng hợp những tính năng mới của JavaScript ES6 giúp code ngắn gọn và mạnh mẽ hơn.",
    content: `
      <p>nếu nói về JavaScript mà không nhắc đến ES6 (ECMAScript 2015) thì thật là thiếu sót, vì đây chính là bản cập nhật đã mang đến một "cuộc cách mạng" cho ngôn ngữ này. ES6 không chỉ là nâng cấp mà là sự tái sinh, giúp JavaScript trở nên hiện đại, mạnh mẽ và thân thiện hơn với Developer. Ngay từ việc khai báo biến, chúng ta đã có let và const để thay thế cho var cũ kỹ, giải quyết triệt để vấn đề về phạm vi (scoping) gây nhầm lẫn. Cú pháp viết hàm được tinh gọn đáng kể với Arrow Function, không chỉ giúp code ngắn gọn hơn mà còn xử lý this một cách trực quan hơn. Công việc xử lý chuỗi cũng "dễ thở" hơn nhờ Template Literals, cho phép nhúng biến và viết chuỗi đa dòng một cách dễ dàng. Cuối cùng, sự xuất hiện của Class và Module đã đưa JavaScript tiến gần hơn đến các ngôn ngữ hướng đối tượng truyền thống, giúp chúng ta xây dựng cấu trúc code lớn, phức tạp một cách rõ ràng và dễ quản lý hơn bao giờ hết, thực sự đưa JS lên một tầm cao mới trong lập trình.</p>
      <ul>
        <li><strong>let</strong> và <strong>const</strong> thay cho var.</li>
        <li><strong>Arrow Function</strong> giúp viết hàm ngắn gọn hơn.</li>
        <li><strong>Template Literals</strong> cho phép chèn biến trong chuỗi dễ dàng.</li>
        <li><strong>Class</strong> và <strong>Module</strong> giúp cấu trúc code rõ ràng hơn.</li>
      </ul>
    `
  },
  {
    title: "Quản lý bộ nhớ trong Java",
    date: "2025-10-23",
    image: "images/java-memory.jpg",
    description: "Cách Java xử lý bộ nhớ, Garbage Collector hoạt động như thế nào và tại sao nó quan trọng.",
    content: `
      Một trong những lý do khiến Java trở thành lựa chọn vững chắc cho các hệ thống lớn chính là cách nó xử lý bộ nhớ, nhờ vào cơ chế tự động mang tên Garbage Collector (GC). GC đóng vai trò như một người "quản gia" siêng năng, âm thầm hoạt động ở hậu trường để dọn dẹp và thu hồi bộ nhớ từ những đối tượng không còn được tham chiếu hay sử dụng trong chương trình của bạn. Chính cơ chế tự động này đã giải phóng lập trình viên khỏi gánh nặng của việc giải phóng bộ nhớ thủ công (mà các ngôn ngữ cũ thường yêu cầu), từ đó giúp giảm thiểu đáng kể các lỗi nghiêm trọng như rò rỉ bộ nhớ (memory leaks) và lỗi con trỏ, cho phép chúng ta tập trung hoàn toàn vào logic nghiệp vụ và cải thiện đáng kể hiệu suất và tính ổn định tổng thể của chương trình. Tóm lại, GC là một tính năng "cứu cánh" và là minh chứng cho sự trưởng thành của Java.`
  },
  {
    title: "DOM là gì trong JavaScript?",
    date: "2025-10-24",
    image: "images/js-dom.jpg",
    description: "Tìm hiểu Document Object Model và cách JavaScript tương tác với HTML qua DOM API.",
    content: `
      <p>Khi nói về cách JavaScript "làm phép" trên trang web, chúng ta phải nhắc đến DOM (Document Object Model), nó không gì khác hơn là cách trình duyệt tạo ra một biểu đồ cấu trúc (hay một bản đồ) của toàn bộ trang web của bạn, từ thẻ <html> cho đến từng nút, từng đoạn văn bản nhỏ nhất. Chính nhờ có mô hình này, JavaScript mới có thể sử dụng DOM API để tìm kiếm, thêm, xóa, hoặc thay đổi bất kỳ phần tử HTML hay thuộc tính CSS nào trên trang một cách dễ dàng, ví dụ kinh điển nhất là sử dụng document.getElementById("id");. Toàn bộ quá trình này biến trang web từ một tài liệu tĩnh trở thành một giao diện phản hồi linh hoạt theo từng hành động của người dùng, cho phép chúng ta xây dựng các tính năng tương tác phức tạp mà không cần phải tải lại trang, đây chính là trái tim của lập trình Frontend hiện đại.</p>
    `
  },
  {
    title: "Xử lý lỗi trong Java",
    date: "2025-10-25",
    image: "images/java-error.jpg",
    description: "Cách sử dụng try-catch-finally trong Java và cách viết Exception tùy chỉnh.",
    content: `
      <p>Java cung cấp một cơ chế xử lý lỗi mạnh mẽ và có cấu trúc: bộ ba thần thánh try-catch-finally. Phần try là nơi chúng ta đặt các khối code có nguy cơ gây ra lỗi (Exception). Nếu một lỗi thực sự xảy ra, chương trình sẽ không dừng lại mà "nhảy" ngay vào khối catch, cho phép chúng ta bắt lấy lỗi đó (ví dụ: catch (Exception e)) và thực hiện các hành động cần thiết như ghi lại lỗi, thông báo cho người dùng, hoặc tìm cách phục hồi. Cuối cùng, khối finally là một khu vực luôn luôn được thực thi, bất kể lỗi có xảy ra hay không, lý tưởng để thực hiện các công việc dọn dẹp quan trọng như đóng kết nối cơ sở dữ liệu hay đóng file. Hơn thế nữa, các Dev chuyên nghiệp còn có thể tạo ra các lớp Exception riêng để mô tả những loại lỗi cụ thể hơn trong ngữ cảnh ứng dụng của mình, giúp việc debug và quản lý lỗi trở nên tường minh và hiệu quả hơn rất nhiều.</p>
    `
  },
  {
    title: "Async & Await trong JavaScript",
    date: "2025-10-26",
    image: "images/async-await.jpg",
    description: "Giải thích cách hoạt động của Async/Await giúp code bất đồng bộ trở nên dễ hiểu hơn.",
    content: `
      <p>vấn đề đau đầu nhất của JavaScript – đó là xử lý các tác vụ bất đồng bộ (asynchronous) – chúng ta có cặp đôi hiện đại async/await. Đây là cú pháp giúp "làm phẳng" và làm cho code của bạn dễ đọc hơn rất nhiều so với việc sử dụng Promise chain phức tạp. Về cơ bản, khi bạn khai báo một hàm là async, điều đó cho phép bạn sử dụng từ khóa await bên trong, từ khóa này sẽ "tạm dừng" việc thực thi hàm tại dòng đó cho đến khi Promise được giải quyết, ví dụ như khi chờ đợi kết quả từ fetch("data.json"). Điều kỳ diệu ở đây là code của bạn trông như đang chạy tuần tự (synchronous) từng bước một, nhưng thực chất nó không hề làm "đơ" giao diện người dùng (UI) hay chặn luồng chính, giúp ứng dụng của bạn luôn phản hồi mượt mà. Nhờ có async/await, việc xử lý các thao tác I/O phức tạp giờ đây trở nên sạch sẽ và logic hơn bao giờ hết, thực sự là một bước tiến lớn cho JavaScript.</p>
    `
  }
];

// ✅ Render ra HTML
window.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("post-list");
  if (!container) return;

  container.innerHTML = posts.map((post, i) => `
    <div class="post-card fade-section" data-index="${i}">
      <img src="${post.image}" alt="${post.title}" onerror="this.src='images/default.jpg'">
      <h2>${post.title}</h2>
      <small>${post.date}</small>
      <p class="post-summary">${post.description}</p>
      <button class="read-more">ĐỌC THÊM</button>
      <div class="post-content">${post.content}</div>
    </div>
  `).join("");

  // ⚙️ Sự kiện mở rộng / thu gọn
  const buttons = document.querySelectorAll(".read-more");
  buttons.forEach(btn => {
    btn.addEventListener("click", () => {
      const card = btn.closest(".post-card");
      card.classList.toggle("expanded");
      btn.textContent = card.classList.contains("expanded") ? "THU GỌN" : "ĐỌC THÊM";
    });
  });
});
