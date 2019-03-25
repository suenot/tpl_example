
## Памятка по верстке шаблонов на ReactJS

Пример шаблона с готовой интеграцией:
[https://codesandbox.io/s/3y2842wz5q](https://codesandbox.io/s/3y2842wz5q)

|Type|Calls example  |Description|
|--|--|--|
|**textarea**  |view.$variable.value  |**String:** text  |
|**integer**  |view.$variable.value  |**Number:** integer  |
|**html**  |inlines.$variable  |**String:** dangerous html...  |
|**image**  |view.$variable.items[0].src  |**Array:** [ ] or [0]  |
|**gallery**  |view.$variable.items[...]  |**Array [...]**  |
|**related_items**  |view.$variable.items.map((item, index) => {  // Related model...  })  |**Array [...]**  |
|**color**  |view.$variable.value  |**String:** rgba  |
|**bool**  |view.$variable.value  |**Bool:** true/false  |

###### stackedit.io
