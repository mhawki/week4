Предисловие к задачам.
У вас уже созданы файлы с названиями функций. В конце условия каждой задачи говорится в каком файле необходимо писать код

# Задача 1:

У вас есть отсортированный массив уникальных целых чисел и целевое значение. Ваша задача - найти индекс целевого значения в массиве, если оно там существует. Если целевого значения в массиве нет, алгоритм должен вернуть индекс, в который оно могло бы быть вставлено, чтобы сохранить упорядоченность массива.

Примеры:

    Дан массив nums = [1, 3, 5, 6] и целевое значение 5. Алгоритм должен вернуть 2, потому что 5 найдено по индексу 2.

    Дан массив nums = [1, 3, 5, 6] и целевое значение 2. Алгоритм должен вернуть 1, потому что 2 могло бы быть вставлено по индексу 1.

    Дан массив nums = [1, 3, 5, 6] и целевое значение 7. Алгоритм должен вернуть 4, потому что 7 могло бы быть вставлено по индексу 4, чтобы сохранить упорядоченность массива.

Работайте в файле searchInsert.js

# Задача 2:

У вас есть два упорядоченных по неубыванию массива целых чисел: `nums1` и `nums2`. Также даны два целых числа `m` и `n`, представляющих количество элементов в массивах `nums1` и `nums2` соответственно.

Ваша задача - объединить массивы `nums1` и `nums2` в один массив, который также должен быть упорядочен по неубыванию.

Итоговый упорядоченный массив не должен быть возвращен функцией. Вместо этого он должен быть сохранен внутри массива `nums1`. Для этого предполагается, что массив `nums1` имеет длину `m + n`, где первые `m` элементов обозначают элементы, которые должны быть объединены, и последние `n` элементов установлены в 0 и должны быть проигнорированы. Массив `nums2` имеет длину `n`.

Примеры:

1. Даны массивы `nums1 = [1,2,3,0,0,0]`, `m = 3`, `nums2 = [2,5,6]`, `n = 3`. Результат должен быть `[1,2,2,3,5,6]`. Это объединение массивов `[1,2,3]` и `[2,5,6]`.

2. Даны массивы `nums1 = [1]`, `m = 1`, `nums2 = []`, `n = 0`. Результат должен быть `[1]`. Это объединение массива `[1]` с пустым массивом.

3. Даны массивы `nums1 = [0]`, `m = 0`, `nums2 = [1]`, `n = 1`. Результат должен быть `[1]`. Это объединение пустого массива с массивом `[1]`. Обратите внимание, что из-за того, что `m = 0`, в `nums1` нет элементов, и нули присутствуют только для того, чтобы итоговый результат поместился в `nums1`.

Работайте в файле sortedSquares.js

## Задача 3:

У вас есть массив целых чисел nums и неотрицательное целое число k. Ваша задача - выполнить циклический сдвиг элементов массива nums вправо на k шагов.

Примеры:

    Дан массив nums = [1, 2, 3, 4, 5, 6, 7] и k = 3. После выполнения сдвига, массив nums станет [5, 6, 7, 1, 2, 3, 4].

    Дан массив nums = [-1, -100, 3, 99] и k = 2. После выполнения сдвига, массив nums станет [3, 99, -1, -100].

Задача заключается в том, чтобы циклически сдвинуть элементы массива nums вправо на k шагов.

Работайте в файле rotate.js

## Задача 4:

У вас есть массив целых чисел `nums`. Ваша задача - переместить все нули в конец массива, при этом сохраняя относительный порядок остальных (ненулевых) элементов. Важно выполнить это внутри данного массива без создания копии.

Примечание: Нельзя создавать дополнительный массив или копию, все операции должны выполняться внутри массива `nums`.

Примеры:

1. Для массива `nums = [0, 1, 0, 3, 12]` после выполнения операции, массив `nums` станет `[1, 3, 12, 0, 0]`. Нули перемещены в конец, а ненулевые элементы сохраняют свой относительный порядок.

2. Для массива `nums = [0]` после выполнения операции, массив `nums` останется `[0]`. Здесь нет ненулевых элементов, поэтому ничего не изменится.

Задача заключается в том, чтобы провести эту операцию "на месте" в массиве `nums`.

Работайте в файле moveZeroes.js

## Задача 5:

У вас есть массив целых чисел `nums`. Ваша задача - найти индекс, который является "пивотным" индексом (pivot index) для этого массива. Пивотный индекс - это индекс, на котором сумма всех чисел строго слева от этого индекса равна сумме всех чисел строго справа от него.

Если индекс находится на левом краю массива, то сумма слева равна 0, так как нет элементов слева. То же самое применимо к правому краю массива.

Верните самый левый пивотный индекс. Если такого индекса не существует, верните -1.

Примеры:

1.  Для массива `nums = [1, 7, 3, 6, 5, 6]`, пивотный индекс равен 3. Сумма чисел слева от индекса 3 равна 11 (1 + 7 + 3), и сумма чисел справа от индекса 3 равна 11 (5 + 6).
2.  Для массива `nums = [1, 2, 3]` нет индекса, который удовлетворяет условиям задачи. В этом случае вернется -1, так как не существует индекса, на котором сумма чисел слева была бы равна сумме чисел справа.
3.  Для массива `nums = [2, 1, -1]`, пивотный индекс равен 0. Сумма чисел слева от индекса 0 равна 0 (нет элементов слева), и сумма чисел справа от индекса 0 равна 0 (1 + -1). Таким образом, индекс 0 удовлетворяет условиям задачи.

Задача заключается в том, чтобы найти индекс, на котором сумма чисел слева равна сумме чисел справа, или вернуть -1, если такой индекс не существует.

Работайте в файле pivotIndex.js
#   w e e k 4  
 #   w e e k 4  
 