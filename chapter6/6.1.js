// v1
// function printOwing(invoice) {
//   printBanner();
//   let outstanding = calculateOutstanding();

//   /** 세부 사항 출력 */
//   console.log(`고객명: ${invoice.customer}`);
//   console.log(`채무액: ${outstanding}`);
// }

// v2
// function printOwing(invoice) {
//   printBanner();
//   let outstanding = calculateOutstanding();
//   printDetails(outstanding);

//   function printDetails(outstanding) {
//     /** 세부 사항 출력 */
//     console.log(`고객명: ${invoice.customer}`);
//     console.log(`채무액: ${outstanding}`);
//   }
// }

// v3
// function printOwing(invoice) {
//   let outstanding = 0;
//   console.log("**************");
//   console.log("***고객채무***");
//   console.log("**************");

//   /** 미해결 채무(outstanding)를 계산한다. */
//   for (const o of invoice.orders) {
//     outstanding += o.amount;
//   }

//   /** 마감일(dueDate)을 기록한다. */
//   const today = Clock.today;
//   invoice.dueDate = new Date(
//     today.getFullYear(),
//     today.getMonth(),
//     today.getDate() + 30
//   );

//   /** 세부 사항을 출력한다. */
//   console.log(`고객명: ${invoice.customer}`);
//   console.log(`채무액: ${outstanding}`);
//   console.log(`마감일: ${invoice.dueDate.toLocalDateString()}`);
// }

// v4
// function printOwing(invoice) {
//   let outstanding = 0;

//   printBanner();

//   /** 미해결 채무(outstanding)를 계산한다. */
//   for (const o of invoice.orders) {
//     outstanding += o.amount;
//   }

//   /** 마감일(dueDate)을 기록한다. */
//   const today = Clock.today;
//   invoice.dueDate = new Date(
//     today.getFullYear(),
//     today.getMonth(),
//     today.getDate() + 30
//   );

//   /** 세부 사항을 출력한다. */
//   console.log(`고객명: ${invoice.customer}`);
//   console.log(`채무액: ${outstanding}`);
//   console.log(`마감일: ${invoice.dueDate.toLocalDateString()}`);

//   function printBanner() {
//     console.log("**************");
//     console.log("***고객채무***");
//     console.log("**************");
//   }
// }

// v5
// function printOwing(invoice) {
//   let outstanding = 0;

//   printBanner();

//   /** 미해결 채무(outstanding)를 계산한다. */
//   for (const o of invoice.orders) {
//     outstanding += o.amount;
//   }

//   /** 마감일(dueDate)을 기록한다. */
//   const today = Clock.today;
//   invoice.dueDate = new Date(
//     today.getFullYear(),
//     today.getMonth(),
//     today.getDate() + 30
//   );

//   /** 세부 사항을 출력한다. */
//   printDetails();

//   function printBanner() {
//     console.log("**************");
//     console.log("***고객채무***");
//     console.log("**************");
//   }

//   function printDetails() {
//     console.log(`고객명: ${invoice.customer}`);
//     console.log(`채무액: ${outstanding}`);
//     console.log(`마감일: ${invoice.dueDate.toLocalDateString()}`);
//   }
// }

// v6
// function printOwing(invoice) {
//   let outstanding = 0;

//   printBanner();

//   /** 미해결 채무(outstanding)를 계산한다. */
//   for (const o of invoice.orders) {
//     outstanding += o.amount;
//   }

//   /** 마감일(dueDate)을 기록한다. */
//   const today = Clock.today;
//   invoice.dueDate = new Date(
//     today.getFullYear(),
//     today.getMonth(),
//     today.getDate() + 30
//   );

//   /** 세부 사항을 출력한다. */
//   printDetails(invoice, outstanding);

//   function printBanner() {
//     console.log("**************");
//     console.log("***고객채무***");
//     console.log("**************");
//   }
// }

// function printDetails(invoice, outstanding) {
//   console.log(`고객명: ${invoice.customer}`);
//   console.log(`채무액: ${outstanding}`);
//   console.log(`마감일: ${invoice.dueDate.toLocalDateString()}`);
// }

// v7
// function printOwing(invoice) {
//   let outstanding = 0;

//   printBanner();

//   /** 미해결 채무(outstanding)를 계산한다. */
//   for (const o of invoice.orders) {
//     outstanding += o.amount;
//   }

//   /** 마감일(dueDate)을 기록한다. */
//   recordDueDate(invoice);

//   /** 세부 사항을 출력한다. */
//   printDetails(invoice, outstanding);
// }

// function printBanner() {
//   console.log("**************");
//   console.log("***고객채무***");
//   console.log("**************");
// }

// function printDetails(invoice, outstanding) {
//   console.log(`고객명: ${invoice.customer}`);
//   console.log(`채무액: ${outstanding}`);
//   console.log(`마감일: ${invoice.dueDate.toLocalDateString()}`);
// }

// function recordDueDate(invoice) {
//   const today = Clock.today;
//   invoice.dueDate = new Date(
//     today.getFullYear(),
//     today.getMonth(),
//     today.getDate() + 30
//   );
// }

// v8
// function printOwing(invoice) {
//   printBanner();

//   /** 미해결 채무(outstanding)를 계산한다. */
//   const outstanding = calculateOutstanding(invoice);

//   /** 마감일(dueDate)을 기록한다. */
//   recordDueDate(invoice);

//   /** 세부 사항을 출력한다. */
//   printDetails(invoice, outstanding);
// }

// function printBanner() {
//   console.log("**************");
//   console.log("***고객채무***");
//   console.log("**************");
// }

// function printDetails(invoice, outstanding) {
//   console.log(`고객명: ${invoice.customer}`);
//   console.log(`채무액: ${outstanding}`);
//   console.log(`마감일: ${invoice.dueDate.toLocalDateString()}`);
// }

// function recordDueDate(invoice) {
//   const today = Clock.today;
//   invoice.dueDate = new Date(
//     today.getFullYear(),
//     today.getMonth(),
//     today.getDate() + 30
//   );
// }

// function calculateOutstanding(invoice) {
//   let outstanding = 0;
//   for (const o of invoice.orders) {
//     outstanding += o.amount;
//   }
//   return outstanding;
// }
