import { OrderStatus, Role } from "@prisma/client";

export const productCategories = [
  { CategoryName: "Electronics" },
  { CategoryName: "Clothing" },
  { CategoryName: "Home & Kitchen" },
  { CategoryName: "Beauty & Personal Care" },
  { CategoryName: "Sports & Outdoors" },
  { CategoryName: "Automotive" },
];

export const users = [
  {
    UserName: "younes",
    UserEmail: "younes@gmail.com",
    UserPhone: "0552038398",
    UserPassword: "testtest",
  },
  {
    UserName: "younesadmine",
    UserEmail: "younes2@gmail.com",
    UserPhone: "0552038398",
    UserPassword: "testtest",
    UserRole: Role.ADMIN,
  },
];
export const products = [
  {
    ProductName: "Smartphone Samsung Galaxy S21",
    ProductDesc:
      "Samsung Galaxy S21 with 128GB storage, 12GB RAM, and 6.2-inch display",
    ProductPrice: 999,
    ProductSKU: "SAMSUNGGS21",
    ProductCategoryId: 1,
    ProductImagePath: "https://hello.com",
    ProductQuantity: 5,
  },
  {
    ProductName: "Men's Leather Jacket",
    ProductDesc:
      "Genuine leather jacket for men, available in various sizes and colors",
    ProductPrice: 199,
    ProductSKU: "MENLEATHERJKT",
    ProductCategoryId: 2,
    ProductImagePath: "https://hello.com",
    ProductQuantity: 5,
  },
  {
    ProductName: "Instant Pot Pressure Cooker",
    ProductDesc:
      "Multi-function electric pressure cooker with various cooking modes and programmable timer",
    ProductPrice: 79.99,
    ProductSKU: "INSTANTPOTPC",
    ProductCategoryId: 3,
    ProductImagePath: "https://hello.com",
    ProductQuantity: 5,
  },
];
export const orders = [
  {
    OrderAmount: 2000,
    OrderPhone: "1234567891",
    OrderEmail: "test@gmail.com",
    OrderCity: "isser",
    OrderAdress: "isser ville",
    OrderStatus: OrderStatus.PENDING,
    OrderUserId: 1,
  },
  {
    OrderAmount: 1500,
    OrderPhone: "9876543210",
    OrderEmail: "customer1@example.com",
    OrderCity: "New York",
    OrderAdress: "123 Main Street",
    OrderStatus: OrderStatus.PENDING,
    OrderUserId: 2,
  },
  {
    OrderAmount: 800,
    OrderPhone: "5555555555",
    OrderEmail: "customer2@example.com",
    OrderCity: "Los Angeles",
    OrderAdress: "456 Oak Avenue",
    OrderStatus: OrderStatus.PENDING,
    OrderUserId: 1,
  },
  {
    OrderAmount: 1200,
    OrderPhone: "4444444444",
    OrderEmail: "customer4@example.com",
    OrderCity: "Paris",
    OrderAdress: "987 Maple Avenue",
    OrderStatus: OrderStatus.PENDING,
    OrderUserId: 2,
  },
  {
    OrderAmount: 3000,
    OrderPhone: "1112223333",
    OrderEmail: "customer3@example.com",
    OrderCity: "London",
    OrderAdress: "789 Elm Street",
    OrderStatus: OrderStatus.PENDING,
    OrderUserId: 2,
  },
];
export const orderDetails = [];
