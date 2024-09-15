function Output(question, value) {
    const outputDiv = document.getElementById("nhap");
    outputDiv.innerHTML += `<div class="display"> <span>${question}  ${value}</span> </div>`;
  }
  
  //27
  function removeDuplicates(arr) {
    return [...new Set(arr)];
  }
  Output(
    27,
    ". Tạo một hàm sẽ nhận một mảng số làm đối số và sẽ trả về một mảng mới với các phần tử riêng biệt:"
  );
  const numbers = [1, 2, 2, 3, 4, 4, 5];
  Output(" mang nhap vao: ", numbers);
  const uniqueNumbers = removeDuplicates(numbers);
  Output(" Manng rieng biet:", uniqueNumbers);
  //28
  // Hàm kiểm tra số nguyên tố
  Output(
    28,
    ". Tính tổng của 100 số nguyên tố đầu tiên và trả về chúng trong một mảng:"
  );
  function isPrime(num) {
    if (num <= 1) return false;
    if (num <= 3) return true;
    if (num % 2 === 0 || num % 3 === 0) return false;
    for (let i = 5; i * i <= num; i += 6) {
      if (num % i === 0 || num % (i + 2) === 0) return false;
    }
    return true;
  }
  
  // Hàm tìm 100 số nguyên tố đầu tiên
  function getFirstNPrimes(n) {
    const primes = [];
    let num = 2;
  
    while (primes.length < n) {
      if (isPrime(num)) primes.push(num);
      num++;
    }
  
    return primes;
  }
  
  // Hàm tính tổng của mảng số nguyên tố
  function sumOfArray(arr) {
    return arr.reduce((acc, curr) => acc + curr, 0);
  }
  
  // Sử dụng các hàm
  const numberOfPrimes = 100;
  const primes = getFirstNPrimes(numberOfPrimes);
  const sum = sumOfArray(primes);
  
  Output("Số nguyên tố:", primes);
  Output("Tổng của các số nguyên tố:", sum);
  //29
  Output(29, ". In khoảng cách giữa 100 số nguyên tố đầu tiên:");
  // Hàm kiểm tra số nguyên tố
  function isPrime(num) {
    if (num <= 1) return false;
    if (num <= 3) return true;
    if (num % 2 === 0 || num % 3 === 0) return false;
    for (let i = 5; i * i <= num; i += 6) {
      if (num % i === 0 || num % (i + 2) === 0) return false;
    }
    return true;
  }
  
  // Hàm tìm 100 số nguyên tố đầu tiên
  function getFirstNPrimes(n) {
    const primes = [];
    let num = 2;
  
    while (primes.length < n) {
      if (isPrime(num)) primes.push(num);
      num++;
    }
  
    return primes;
  }
  
  // Hàm tính khoảng cách giữa các số nguyên tố
  function getPrimeGaps(primes) {
    const gaps = [];
    for (let i = 1; i < primes.length; i++) {
      gaps.push(primes[i] - primes[i - 1]);
    }
    return gaps;
  }
  
  // Sử dụng các hàm
  const numberOfPrimes1 = 100;
  const primes1 = getFirstNPrimes(numberOfPrimes1);
  const gaps = getPrimeGaps(primes1);
  
  Output("100 số nguyên tố đầu tiên:", primes);
  Output("Khoảng cách giữa các số nguyên tố:", gaps);
  //30
  Output(30, ". In khoảng cách giữa 100 số nguyên tố đầu tiêcn:");
  function addLargeNumbers(a, b) {
    let result = ""; // Chuỗi lưu kết quả
    let carry = 0; // Biến lưu nhớ (carry)
    let i = a.length - 1; // Con trỏ cho số thứ nhất
    let j = b.length - 1; // Con trỏ cho số thứ hai
  
    // Thực hiện cộng cho đến khi hết số ở cả hai chuỗi hoặc còn giá trị nhớ
    while (i >= 0 || j >= 0 || carry) {
      let sum = carry; // Bắt đầu với giá trị nhớ
  
      // Thêm giá trị của chữ số từ chuỗi a (nếu có)
      if (i >= 0) {
        sum += parseInt(a[i--], 10);
      }
  
      // Thêm giá trị của chữ số từ chuỗi b (nếu có)
      if (j >= 0) {
        sum += parseInt(b[j--], 10);
      }
  
      // Lấy chữ số cuối cùng của tổng và thêm vào kết quả
      result = (sum % 10) + result;
  
      // Cập nhật giá trị nhớ
      carry = Math.floor(sum / 10);
    }
  
    return result; // Trả về kết quả cộng dưới dạng chuỗi
  }
  Output("Tong cua 5 va 7 la:", addLargeNumbers("123456789", "987654321"));
  //31
  Output(31, ".Tạo một hàm sẽ trả về số lượng từ trong một văn bản:");
  function countWords(text) {
    // Sử dụng trim để loại bỏ khoảng trắng đầu và cuối chuỗi
    // Sử dụng regex \s+ để tách các từ dựa trên khoảng trắng
    return text.trim().split(/\s+/).length;
  }
  Output("ket qua :", countWords("Hello, how are you?"));
  //32
  Output(
    32,
    ". Tạo một hàm sẽ viết hoa chữ cái đầu tiên của mỗi từ trong một văn bản:"
  );
  function capitalizeWords(text) {
    return text.toLowerCase().replace(/\b\w/g, (char) => char.toUpperCase());
  }
  Output("ket qua :", capitalizeWords("hello, how are you?"));
  //33
  Output(
    33,
    ". Tính tổng các số nhận được trong một chuỗi phân cách bằng dấu phẩy:"
  );
  function sumCSVNumbers(csv) {
    return csv.split(",").reduce((sum, num) => sum + parseFloat(num), 0);
  }
  Output("Tong cac so trong chuoi la:", sumCSVNumbers("1,2,3,4,5"));
  //34
  Output(34, ". In khoảng cách giữa 100 số nguyên tố đầu tiên:");
  function wordsArray(text) {
    return text.trim().split(/\s+/);
  }
  Output("ket qua:", wordsArray("Hello, how are you?"));
  //35
  Output(35, ". Hàm chuyển đổi văn bản CSV thành mảng hai chiều:");
  function csvToArray(csvText) {
    return csvText.split("\n").map((row) => row.split(","));
  }
  Output("ket qua:", csvToArray("a,b\nc,d\n"));
  //36
  Output(36, ". Tạo một hàm chuyển đổi chuỗi thành mảng ký tự:");
  function stringToCharArray(str) {
    return str.split("");
  }
  Output("ket qua:", stringToCharArray("hello"));
  // 37. Tạo một hàm sẽ chuyển đổi chuỗi thành mảng chứa mã ASCII của từng ký tự
  Output(
    37,
    ". Tạo một hàm sẽ chuyển đổi chuỗi thành mảng chứa mã ASCII của từng ký tự:"
  );
  function stringToAsciiArray(str) {
    return str.split("").map((char) => char.charCodeAt(0));
  }
  Output("ket qua:", stringToAsciiArray("hello"));
  // 38. Tạo một hàm sẽ chuyển đổi mảng chứa mã ASCII thành chuỗi
  Output(38, ". Tạo một hàm sẽ chuyển đổi mảng chứa mã ASCII thành chuỗi:");
  function asciiArrayToString(arr) {
    return arr.map((code) => String.fromCharCode(code)).join("");
  }
  Output("ket qua:", asciiArrayToString([104, 101, 108, 108, 111]));
  // 39. Triển khai mã hóa Caesar
  Output(39, ". Triển khai mã hóa Caesar:");
  function caesarCipher(str, shift) {
    return str.replace(/[a-zA-Z]/g, (char) => {
      let base = char <= "Z" ? 65 : 97; // Xác định cơ sở: 'A' hoặc 'a'
      return String.fromCharCode(
        ((char.charCodeAt(0) - base + shift) % 26) + base
      );
    });
  }
  Output("ket qua:", caesarCipher("Hello World", 3));
  // 40. Triển khai thuật toán sắp xếp nổi bọt cho mảng số
  Output(40, ". Triển khai thuật toán sắp xếp nổi bọt cho mảng số:");
  function bubbleSort(arr) {
    let n = arr.length;
    for (let i = 0; i < n - 1; i++) {
      for (let j = 0; j < n - i - 1; j++) {
        if (arr[j] > arr[j + 1]) {
          [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        }
      }
    }
    return arr;
  }
  Output("ket qua:", bubbleSort([64, 34, 25, 12, 22, 11, 90]));
  // 41. Tạo một hàm để tính khoảng cách giữa hai điểm được xác định bởi tọa độ x, y của chúng
  Output(
    41,
    ". Tạo một hàm để tính khoảng cách giữa hai điểm được xác định bởi tọa độ x, y của chúng:"
  );
  function distanceBetweenPoints(x1, y1, x2, y2) {
    return Math.hypot(x2 - x1, y2 - y1);
  }
  Output("ket qua:", distanceBetweenPoints(1, 1, 2, 2));
  // 42. Tạo một hàm sẽ trả về giá trị Boolean cho biết hai vòng tròn được xác định bởi tọa độ tâm và bán kính có giao nhau không
  Output(
    42,
    ". Tạo một hàm sẽ trả về giá trị Boolean cho biết hai vòng tròn được xác định bởi tọa độ tâm và bán kính có giao nhau không:"
  );
  function circlesIntersect(x1, y1, r1, x2, y2, r2) {
    return Math.hypot(x2 - x1, y2 - y1) < r1 + r2;
  }
  Output("ket qua:", circlesIntersect(1, 1, 1, 2, 2, 1));
  // 43. Tạo một hàm sẽ nhận một mảng hai chiều làm đối số và một số và sẽ trích xuất dưới dạng mảng một chiều cột được chỉ định bởi
  Output(
    43,
    ". Tạo một hàm sẽ nhận một mảng hai chiều làm đối số và một số và sẽ trích xuất dưới dạng mảng một chiều cột được chỉ định bởi số:"
  );
  function extractCol(matrix, col) {
    return matrix.map((row) => row[col]);
  }
  Output(
    "ket qua:",
    extractCol(
      [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9],
      ],
      1
    )
  );
  //
  // 44. Tạo một hàm sẽ chuyển đổi chuỗi chứa số nhị phân thành số
  Output(44, ". Tạo một hàm sẽ chuyển đổi chuỗi chứa số nhị phân thành số:");
  function binaryToNumber(binary) {
    return parseInt(binary, 2);
  }
  Output("ket qua:", binaryToNumber("1101"));
  // 45. Tạo một hàm để tính tổng của tất cả các số trong mảng răng cưa(chứa số hoặc các mảng số khác trên số lượng không giới hạn  cấp độ)
  Output(45, ". Tạo một hàm để tính tổng của tất cả các số trong mảng răng cưa:");
  function sumNestedArray(arr) {
    return arr.flat(Infinity).reduce((sum, num) => sum + num, 0);
  }
  Output("ket qua:", sumNestedArray([1, [2, [3, [4]]]]));
  //
  // 46. Tìm số lượng lớn nhất trong một mảng răng cưa của các số hoặc mảng số
  Output(
    46,
    ". Tìm số lượng lớn nhất trong một mảng răng cưa của các số hoặc mảng số:"
  );
  function maxNestedArray(arr) {
    return Math.max(...arr.flat(Infinity));
  }
  Output("ket qua:", maxNestedArray([1, [2, [3, [4]]]]));
  // 47. Sao chép sâu một mảng răng cưa với các số hoặc các mảng khác trong một mảng mới
  Output(
    47,
    ". Sao chép sâu một mảng răng cưa với các số hoặc các mảng khác trong một mảng mới:"
  );
  function deepCopy(arr) {
    return JSON.parse(JSON.stringify(arr));
  }
  Output("ket qua:", deepCopy([1, [2, [3, [4]]]]));
  
  // 48. Tạo một hàm để trả về từ dài nhất trong một chuỗi
  Output(48, ". Tạo một hàm để trả về từ dài nhất trong một chuỗi:");
  function longestWord(str) {
    return str
      .split(" ")
      .reduce(
        (longest, word) => (word.length > longest.length ? word : longest),
        ""
      );
  }
  Output("ket qua:", longestWord("The quick brown fox jumps over the lazy dog"));
  // 49. Xáo trộn một mảng các chuỗi
  Output(49, ". Xáo trộn một mảng các chuỗi:");
  function shuffleArray(arr) {
    return arr.sort(() => Math.random() - 0.5);
  }
  Output("ket qua:", shuffleArray(["a", "b", "c", "d"]));
  
  // 50. Tạo một hàm sẽ nhận n làm đối số và trả về một mảng n so ngẫu nhiên từ 1 đến n. Các số phải là duy nhất bên trong mảng.
  Output(50, ". Tạo một hàm sẽ nhận n làm đối số và trả về một mảng n:");
  function randomNumbers(n) {
    return Array.from({ length: n }, () => Math.floor(Math.random() * n) + 1);
  }
  Output("ket qua:", randomNumbers(5));
  
  // 51. Tìm tần suất của các chữ cái bên trong một chuỗi. Trả về kết quả dưới dạng một mảng mảng. Mỗi mảng con có 2 phần tử: chữ cái và số lần xuất hiện.
  Output(51, ". Tìm tần suất của các chữ cái bên trong một chuỗi:");
  function charFrequency(str) {
    const freq = {};
    for (const char of str) {
      freq[char] = freq[char] + 1 || 1;
    }
    return Object.entries(freq);
  }
  Output("ket qua:", charFrequency("hello"));
  // 52. Tính Fibonacci(500) với độ chính xác cao (tất cả các chữ số)
  Output(52, ". Tính Fibonacci(500) với độ chính xác cao:");
  function fibonacci(n) {
    let a = 1n,
      b = 0n,
      temp;
    while (n >= 0) {
      temp = a;
      a += b;
      b = temp;
      n--;
    }
    return b;
  }
  Output("ket qua:", fibonacci(500));
  // 53. Tính 70! với độ chính xác cao (tất cả các chữ số)
  Output(53, ". Tính 70! với độ chính xác cao:");
  function factorial(n) {
    let result = BigInt(1);
    for (let i = 1n; i <= BigInt(n); i++) {
      result *= i;
    }
    return result;
  }
  Output("ket qua:", factorial(70));
  