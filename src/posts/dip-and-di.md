---
title: Dependency Inversion Principle & Dependency Injection
createdAt: '2023-01-26'
updatedAt: '2023-02-13'
excerpt: 這篇想要記錄的是我在學 design patterns (設計模式) 的過程時，常常分不清 dependency injection 和 dependency inversion 之間的關係。因此借機寫成一個 blog，幫自己重新了解一次。
slug: '/blog/p/dip-and-di'
category: ['design pattern']
coverImage: 'https://stackify.com/wp-content/uploads/2018/06/Design-Patterns-Explained-%E2%80%93-Dependency-Injection-with-Code-Examples.png'
---

## TL; DR

Dependency injection (DI) 是一種實現 dependency inversion principle (DIP) 的技術，而 DIP 是一種設計原則[^1]。

<div style={{ marginTop: -20, marginBottom: -20 }}>
  ![di-dip-relationship](https://www.tutorialsteacher.com/Content/images/ioc/principles-and-patterns.png)
</div>

- DIP 是一種「設計原則」，強調高階模組不應該依賴於低階模組[^2]，而是應該依賴於抽象。
- DI：是「實現 DIP」的方法，將 dependency 通過「注入」的方式提供給需要的 class 或 function。

[^1]: SOLID 中的 D 就是 dependency inversion。
[^2]: 高階與低階，指的是「相對關係」，也就是「呼叫者 (caller)」與「被呼叫者 (callee)」之間的關係。

## 依賴反轉原則 (Dependency Inversion Principle, DIP)

首先，為何要說「反轉」呢？更精確地說，**為何要反轉呢**？這是因為我們在開發的時候，往往都是讓大功能（高階模組）調用各個小功能（低階模組）來實現目標，但隨著層次越高，底下依賴的模組越多，所要改動的頻率就會提高。為了解耦 (decoupling)，DIP
提出了幾個重要的原則：

- 使高階模組（呼叫者 caller）不再直接依賴低階模組（被呼叫者 callee），兩者都該依賴抽象
- 抽象不應該依賴於具體實作方式。
- 具體實作方式則應該依賴抽象。

DIP 告訴開發者應該要把重點放在「功能」上，不應該用低階模組去拼湊出高階，而是應該用「抽象層 (abstract
class、interface)」去隔開實作，解開高階與低階之間的耦合
(coupling)。

```bash
# 原本的關係
高階模組 → 低階模組

# 反轉後
高階模組 → 介面 ← 低階模組
```

高階模組提出它需要的功能，低階模組去實作出這些功能、達成高階模組的目標，就好比「公司為了做好的網站（高階模組的目標）」，開出了「應徵條件（介面）」，而我們前去應徵（低階模組的實作）。

講完一些專有名詞，我們用 Python 來實作看看：

- 沒有使用 DIP：

  ```python
  class PostgreSQL:
      def save(self, data: str) -> None:
          print(f"{data} has been saved to PostgreSQL!")

  def main() -> None:
      pg = PostgreSQL()
      pg.save("1@mail.com")
  ```

  乍看之下這樣寫似乎沒有什麼問題，但哪天我們不想用 `PostgreSQL` 類別而是想用 `MongoDB` 類別呢？

  ```python
  class MongoDB:
      def save(self, data: str) -> None:
          print(f"{data} has been saved to MongoDB!")

  def main() -> None:
      mongo = MongoDB()
      mongo.save("1@mail.com")
  ```

  如果一直換 database 種類，`main()` 豈不是每次都要修改，把代碼給寫死不是一個好辦法，因為會產生預想不到的耦合 (coupling)。

- 使用 DIP：

  為了使 `main()` 不再直接與 `PostgreSQL` 類別耦合 (coupling)，我們需要一個介面 (interface) 或抽象類別 (abstract
  class)：

  ```python
  from abc import ABC, abstractmethod

  class Database(ABC):
      @abstractmethod
      def save(self, data: str) -> None:
          pass

  class PostgreSQL(Database):
      def save(self, data: str) -> None:
          print(f"{data} has been saved to PostgreSQL!")

  def main() -> None:
      pg = PostgreSQL()
      pg.save("1@mail.com")
  ```

  這樣就實現了 DIP，主程式不再直接與 `PostgreSQL` 類別耦合。如果你需要更換資料存儲方式，只需要實現一個新的類別並實現
  `Database` 抽象類別即可。

到這裡，不知道你有沒有發現什麼問題？我們在使用 `Database` 功能之前，還是得先建立該類別的 instance (實例)，也就是
`pg = PostgreSQL()`，這樣豈不是直接依賴了 `PostgreSQL` 嗎？「依賴關係」是反轉了，但是還是要有 instance (實例)
才能使用。也就是說，這違反了 SOLID 中的 I (Interface Segregation Principle)。`main()` 不應知道具體的 instance
class (實作類別) 是誰，具體的實作 應是可「替換」的。將對具體的依賴更改為對抽象的依賴，仍然是不夠的。面對這種問題，程式大老們提出了許多個解決的方法，其中一個就是
dependency injection (依賴注入)。

> [Arjan from ArjanCodes]Without dependency injection, there is no dependency inversion principle.

## 依賴注入 (Dependency Injection, DI)

DI 指的是用各種方法把「低階模組」丟到「高階模組」裡。它將物件之間的依賴關係轉移到「創建物件」的地方。它的目的是為了減少耦合性，使得系統更加靈活和可維護。

我們依舊用 database 的例子來實作 DI：

```python
from abc import ABC, abstractmethod

class Database(ABC):
    @abstractmethod
    def save(self, data: str) -> None:
        pass

class PostgreSQL(Database):
    def save(self, data: str) -> None:
        print(f"{data} has been saved to PostgreSQL!")

class MongoDB(Database):
    def save(self, data: str) -> None:
        print(f"{data} has been saved to MongoDB!")

class UserService:
    def __init__(self, db: Database) -> None:
        self.db = db

    def save_user(self, email: str):
        self.db.save(email)
```

在這個例子中，我們利用建構式 `__init__` 的方式，從外部傳入 `Database`
抽象類別的實體來使用。我們再也不用為了換 database 而改變代碼，也不用因為實作細節或是方法名稱而煩惱，只要照 `Database` 使用就可以了。

- ```python
  def main():
      pg = PostgreSQL()
      user = UserService(pg)
      user.save_user("1@mail.com")
  ```

- ```python
  def main():
      mongo = MongoDB()
      user = UserService(mongo)
      user.save_user("1@mail.com")
  ```

至於要傳遞哪個 instance 進來，這份工作要交給開發者或當下的情境，就讓身為控制中心的 `main()` 去決定，大家各司其職，落實
SOLID 中的 S (Single Responsibility)。

## 總結

其實 DIP 與 DI 之間的關係是有**先後順序**的：

1. DIP 告訴我們依賴的對象應該是「功能」
   - **高階模組不應該依賴於低階模組，兩者都應該依賴抽象**：用 interface (介面) 或 abstract class (抽象類) 來進行隔離。
   - **抽象不應該依賴細節。細節應該依賴抽象**：interface (介面) 或 abstract class (抽象類) 應該是高階模組提出的要求，然後才去使用實作了這些要求的低階模組。
2. 為了解決介面實例化仍然會產生依賴的問題，為了解決就有了像是 dependency injection (DI) 等方法
3. DI：藉由從「建構式傳遞」等方式，把低階模組交給高階模組使用者

#### 參考資料

1. [DIP vs IoC vs DI](https://lotabout.me/2018/Dependency-Inversion-Principle/)
2. [菜雞與物件導向 (14): 依賴反轉原則](https://igouist.github.io/post/2020/12/oo-14-dependency-inversion-principle/)
3. [依賴反向原則 (Dependency-Inversion Principle, DIP)](https://notfalse.net/1/dip)
4. [Dependency INVERSION vs dependency INJECTION in Python](https://www.youtube.com/watch?v=2ejbLVkCndI&t=125s)
