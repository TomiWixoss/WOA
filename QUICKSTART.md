# Hướng Dẫn Bắt Đầu Nhanh

## 🚀 Khởi Động Development Server

```bash
npm run dev
```

Mở http://localhost:3000

## 📝 Các Bước Đầu Tiên

### 1. Cấu Hình API Key (Bắt Buộc)

Vào tab **Xây Dựng** (icon ⚙️ ở sidebar):

1. Lấy API key miễn phí tại https://build.nvidia.com/settings/api-keys
2. Nhập API key vào form
3. Nhấn **Lưu API Key**

### 2. Tạo Agent Đầu Tiên

Trong tab **Xây Dựng**:

1. Nhấn nút **Tạo Agent**
2. Nhập tên agent (VD: "Trợ Lý Lập Trình")
3. Nhập mô tả (VD: "Chuyên gia Python và JavaScript")
4. Tùy chỉnh System Prompt (VD: "Bạn là chuyên gia lập trình Python và JavaScript...")
5. Điều chỉnh tham số:
   - **Nhiệt Độ**: 0.7 (cân bằng)
   - **Max Tokens**: 16384 (tối đa)
   - **Top P**: 0.9 (khuyên dùng)
6. Nhấn **Tạo Agent**

### 3. Chat với Agent

Vào tab **Chat** (icon 💬):

1. Chọn agent từ dropdown "Chọn Agent"
2. Gõ tin nhắn vào ô input
3. Nhấn Enter hoặc click nút gửi
4. Xem phản hồi AI streaming theo thời gian thực

## 🎯 Tính Năng Chính

### Tab Xây Dựng (⚙️)
- Cấu hình Nvidia API key (dùng chung cho tất cả agents)
- Tạo nhiều agents với cấu hình khác nhau
- Chỉnh sửa agents đã tạo
- Xóa agents không cần (phải giữ ít nhất 1 agent)
- Xem thông tin chi tiết mỗi agent

### Tab Chat (💬)
- Chọn agent để chat
- Phản hồi streaming thời gian thực
- Lịch sử tin nhắn
- Nút xóa cuộc trò chuyện
- Tự động cuộn đến tin nhắn mới nhất

### Sắp Ra Mắt
- 🎮 **Sân Chơi**: Mô phỏng thế giới tương tác
- 🏗️ **Thế Giới**: Tạo thế giới và NPC tùy chỉnh
- 🧠 **Tâm Trí**: Xem quá trình suy nghĩ của AI
- 📊 **Thống Kê**: Thống kê và insights sử dụng

## 🔑 Lấy API Key

### Nvidia NIM (Miễn Phí)
1. Truy cập https://build.nvidia.com/settings/api-keys
2. Đăng nhập bằng Google/GitHub
3. Nhấn "Generate API Key"
4. Copy và paste vào tab Xây Dựng

## 💡 Mẹo Sử Dụng

### Tạo Agents Chuyên Biệt

**Agent Lập Trình:**
- Tên: "Trợ Lý Code"
- System Prompt: "Bạn là chuyên gia lập trình. Luôn cung cấp code examples với giải thích chi tiết."
- Nhiệt độ: 0.3 (tập trung, chính xác)

**Agent Sáng Tạo:**
- Tên: "Nhà Văn AI"
- System Prompt: "Bạn là nhà văn sáng tạo. Viết nội dung hấp dẫn, sinh động."
- Nhiệt độ: 0.9 (sáng tạo, đa dạng)

**Agent Giải Thích:**
- Tên: "Giáo Viên AI"
- System Prompt: "Bạn là giáo viên. Giải thích đơn giản, dễ hiểu cho người mới."
- Nhiệt độ: 0.5 (cân bằng)

### Tham Số

**Nhiệt Độ:**
- 0.1-0.3: Tập trung, xác định (code, toán học)
- 0.5-0.7: Cân bằng (đa năng)
- 0.8-1.0: Sáng tạo, đa dạng (viết lách, brainstorm)

**Max Tokens:**
- 1000-4000: Câu trả lời ngắn
- 4000-8000: Câu trả lời trung bình
- 8000-16384: Câu trả lời dài, chi tiết

**Top P:**
- 0.9: Khuyên dùng (cân bằng)
- 0.95: Đa dạng hơn
- 0.8: Tập trung hơn

## 🐛 Xử Lý Sự Cố

### Lỗi "Vui lòng cấu hình API key"
- Vào tab Xây Dựng
- Nhập API key
- Nhấn Lưu API Key

### Lỗi "Agent không tồn tại"
- Tạo ít nhất 1 agent trong tab Xây Dựng
- Chọn agent trong dropdown ở tab Chat

### Không Có Phản Hồi / Timeout
- Kiểm tra kết nối internet
- Xác minh API key đúng
- Thử giảm max_tokens

### Phản Hồi Chậm
- Giảm max_tokens xuống 4000-8000
- Kiểm tra tốc độ mạng

## 📚 Bước Tiếp Theo

1. Tạo nhiều agents cho các mục đích khác nhau
2. Thử nghiệm với các tham số khác nhau
3. Tùy chỉnh system prompts cho từng use case
4. Theo dõi các tính năng Sân Chơi, Thế Giới và Tâm Trí!

## 🆘 Cần Trợ Giúp?

- Kiểm tra console để xem thông báo lỗi (F12 trong trình duyệt)
- Xem tài liệu Nvidia NIM: https://build.nvidia.com/docs
- Xác minh API key có đủ quota
