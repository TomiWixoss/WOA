# Mô Phỏng Thế Giới AI

Mô phỏng thế giới dạng văn bản với tương tác AI được hỗ trợ bởi Nvidia NIM.

## Tính Năng

- 🤖 Xây dựng và quản lý nhiều AI agents
- 💬 Giao diện chat streaming thời gian thực
- ⚙️ Cấu hình agent toàn diện (system prompt, nhiệt độ, max tokens)
- 🎨 UI hiện đại với shadcn/ui components
- 📊 Theo dõi sử dụng token
- 💾 Lưu trữ agents bền vững

## Công Nghệ

- **Framework**: Next.js 16 (App Router)
- **Ngôn ngữ**: TypeScript 5
- **Styling**: Tailwind CSS v4
- **UI Components**: shadcn/ui (New York style)
- **Quản lý State**: Zustand + Immer
- **AI Framework**: aio-llm
- **Provider**: Nvidia NIM
- **Model**: Step 3.5 Flash
- **Max Tokens**: 16,384

## Bắt Đầu

### 1. Cài Đặt Dependencies

```bash
npm install
```

### 2. Chạy Development Server

```bash
npm run dev
```

Mở [http://localhost:3000](http://localhost:3000) trong trình duyệt.

## Hướng Dẫn Sử Dụng

### 1. Cấu Hình API Key

1. Vào tab **Xây Dựng** (icon ⚙️)
2. Lấy API key miễn phí tại: https://build.nvidia.com/settings/api-keys
3. Nhập API key và lưu

### 2. Tạo Agent

1. Trong tab **Xây Dựng**, nhấn "Tạo Agent"
2. Nhập tên agent (VD: "Trợ Lý Lập Trình")
3. Nhập mô tả (VD: "Chuyên gia Python và JavaScript")
4. Tùy chỉnh system prompt
5. Điều chỉnh tham số (nhiệt độ, max tokens, top_p)
6. Lưu agent

### 3. Chat với Agent

1. Vào tab **Chat** (icon 💬)
2. Chọn agent từ dropdown
3. Gõ tin nhắn và chat
4. Xem phản hồi streaming thời gian thực

## Cấu Trúc Dự Án

```
app/
├── (dashboard)/
│   ├── config/          # Xây dựng agents
│   ├── chat/            # Chat với agents
│   ├── playground/      # Sắp ra mắt
│   ├── builder/         # Sắp ra mắt
│   ├── analytics/       # Sắp ra mắt
│   └── ai-mind/         # Sắp ra mắt
└── api/chat/            # API streaming

components/
├── config/              # Components xây dựng agent
├── chat/                # Components chat
└── dashboard/           # Layout components

lib/
├── stores/              # Zustand stores (agents, chat)
├── hooks/               # Custom hooks
└── ai/                  # AIO client
```

## Tính Năng Agents

- Tạo nhiều agents với cấu hình khác nhau
- Mỗi agent có:
  - Tên và mô tả riêng
  - System prompt tùy chỉnh
  - Tham số riêng (nhiệt độ, max tokens, top_p)
- Chuyển đổi giữa các agents khi chat
- Chỉnh sửa và xóa agents

## Cấu Hình Mặc Định

- **Provider**: Nvidia NIM
- **Model**: stepfun-ai/step-3.5-flash
- **Max Tokens**: 16,384
- **Nhiệt Độ**: 0.7
- **Top P**: 0.9

## Scripts

```bash
npm run dev          # Chạy development server
npm run build        # Build cho production
npm run start        # Chạy production server
npm run lint         # Chạy ESLint
```

## License

MIT
