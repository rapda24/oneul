// 모든 컴포넌트 로드 후 기능 실행
document.addEventListener('componentLoaded', (event) => {
    if (event.detail === 'aside') {
        console.log('Aside loaded, applying features...');
        
        // aside 메뉴의 클릭 이벤트 처리
        $('aside li a').on('click', function (e) {
            // e.preventDefault() 제거하여 기본 동작(페이지 이동)을 막지 않음
            e.stopPropagation();  // 이벤트 전파 방지 (서브 메뉴 클릭 시 상위 메뉴 클릭 방지)

            const $li = $(this).closest('li');
            $li.addClass('active').siblings().removeClass('active');
            $('aside').toggleClass('open', $li.hasClass('has_sub'));
        });

        // nav_close 클릭 시 aside 메뉴 닫기/열기
        $('.nav_close').on('click', function () {
            const $aside = $('aside');
            if ($aside.hasClass('open') && $('.has_sub.active').length > 0) {
                $aside.removeClass('open');
            } else {
                $aside.toggleClass('hide');
            }
        });
    }
    // 공통 기능 적용
    console.log('Common features applied!');
});



/* pop_imb */
$(".order_list > li").on('click',function(){
    $(this).toggleClass('open')
});

/* filebox 커스텀 */
$("#file").on('change',function(){
    var fileName = $("#file").val();
    $(".upload-name").val(fileName);
});




/* input 캘린더 커스텀 */
document.addEventListener("DOMContentLoaded", function () {
    const startInput = document.getElementById("start-date");
    const endInput = document.getElementById("end-date");
    const calendar = document.getElementById("calendar");
    const today = new Date();
    let selectedStartDate = null;
    let selectedEndDate = null;
    let currentMonthDate = new Date(today);

    startInput.addEventListener("click", () => toggleCalendar("start"));
    endInput.addEventListener("click", () => toggleCalendar("end"));

    function toggleCalendar(target) {
        // 클릭한 input이 이미 열려있는 상태라면 달력 창을 닫지 않도록 처리
        if (!calendar.classList.contains("hidden")) {
            return;
        }
        calendar.classList.toggle("hidden");
        if (!calendar.classList.contains("hidden")) {
            generateCalendar(currentMonthDate, target);
        }
    }

    function generateCalendar(date, target) {
        calendar.innerHTML = ""; // 기존 내용 초기화
        const header = document.createElement("div");
        header.className = "calendar-header";
        
        const prevYearBtn = document.createElement("button");
        prevYearBtn.innerHTML = '<img src="../../../static/img/icon_prevy.svg" alt="Previous Year" />'; 
        prevYearBtn.addEventListener("click", (e) => {
            e.stopPropagation(); // 이벤트 전파를 막아달력 창이 닫히지 않도록 처리
            updateCalendar(-12, target); // 1년 전으로
        });
        
        const prevMonthBtn = document.createElement("button");
        prevMonthBtn.innerHTML = '<img src="../../../static/img/icon_prevm.svg" alt="Previous Month" />'; 
        prevMonthBtn.addEventListener("click", (e) => {
            e.stopPropagation();
            updateCalendar(-1, target); // 1개월 전으로
        });
        
        const nextMonthBtn = document.createElement("button");
        nextMonthBtn.innerHTML = '<img src="../../../static/img/icon_nextm.svg" alt="Next Month" />'; 
        nextMonthBtn.addEventListener("click", (e) => {
            e.stopPropagation();
            updateCalendar(1, target); // 1개월 후로
        });
        
        const nextYearBtn = document.createElement("button");
        nextYearBtn.innerHTML = '<img src="../../../static/img/icon_nexty.svg" alt="Next Year" />'; 
        nextYearBtn.addEventListener("click", (e) => {
            e.stopPropagation();
            updateCalendar(12, target); // 1년 후로
        });

        const title = document.createElement("span");
        title.textContent = `${date.getFullYear()}년 ${date.getMonth() + 1}월`;
        
        header.append(prevYearBtn, prevMonthBtn, title, nextMonthBtn, nextYearBtn);
        calendar.append(header);
        
        // 요일 헤더와 날짜를 묶을 컨테이너 생성
        const daysContainer = document.createElement("div");
        daysContainer.className = "calendar-days-container";

        const daysHeader = ["일", "월", "화", "수", "목", "금", "토"];
        daysHeader.forEach(day => {
            const dayElem = document.createElement("div");
            dayElem.className = "calendar-days";
            dayElem.textContent = day;
            daysContainer.appendChild(dayElem); // calendar-days를 daysContainer에 추가
        });

        const firstDay = new Date(date.getFullYear(), date.getMonth(), 1).getDay();
        const daysInMonth = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
        
        // 첫 번째 날 전까지 빈 칸 추가
        for (let i = 0; i < firstDay; i++) {
            daysContainer.appendChild(document.createElement("div"));
        }

        // 날짜 생성
        for (let i = 1; i <= daysInMonth; i++) {
            const dayElem = document.createElement("div");
            dayElem.className = "calendar-day";
            dayElem.textContent = i;
            dayElem.addEventListener("click", () => selectDate(target, date, i));
            daysContainer.appendChild(dayElem); // calendar-day를 daysContainer에 추가
        }

        // calendar에 daysContainer 추가
        calendar.appendChild(daysContainer); 
    }

    function updateCalendar(monthChange, target) {
        currentMonthDate.setMonth(currentMonthDate.getMonth() + monthChange);
        generateCalendar(currentMonthDate, target);
    }

    function selectDate(target, date, day) {
        const selectedDate = new Date(date.getFullYear(), date.getMonth(), day);
        
        if (target === "start") {
            // 선택한 날짜가 종료일보다 늦으면 종료일을 비우고 시작일로 설정
            if (selectedEndDate && selectedDate > selectedEndDate) {
            selectedEndDate = null;
            endInput.value = "";
            }
            selectedStartDate = selectedDate;
            startInput.value = `${selectedDate.getFullYear()}-${String(selectedDate.getMonth() + 1).padStart(2, "0")}-${String(day).padStart(2, "0")}`;
        } else if (target === "end") {
            selectedEndDate = selectedDate;
            endInput.value = `${selectedDate.getFullYear()}-${String(selectedDate.getMonth() + 1).padStart(2, "0")}-${String(day).padStart(2, "0")}`;
        }

        // 날짜 선택 후 달력 닫기
        calendar.classList.add("hidden");
    }

    document.addEventListener("click", (e) => {
        if (!e.target.closest(".custom-datepicker") && !e.target.closest("#calendar")) {
            calendar.classList.add("hidden");
        }
    });
});


/* 셀렉트 박스 */
document.addEventListener('DOMContentLoaded', function() {
    const bindCustomSelectEvents = (select) => {
        if (!select.getAttribute('data-select-bound')) {
            select.addEventListener('click', function(event) {
                event.stopPropagation();
                document.querySelectorAll('.custom-select.open').forEach(openSelect => {
                    if (openSelect !== select) {
                        openSelect.classList.remove('open');
                    }
                });
                select.classList.toggle('open');
                const input = select.querySelector('.select-search');
                if (input) {
                    input.value = '';
                    filterOptions(input);
                    input.focus();
                }
            });
            select.setAttribute('data-select-bound', 'true');
        }
    };

    const bindOptionEvents = (option) => {
        if (!option.getAttribute('data-option-bound')) {
            option.addEventListener('click', function(event) {
                event.stopPropagation();
                const selectBox = option.closest('.custom-select').querySelector('.select-box span');
                selectBox.textContent = option.textContent;
                option.closest('.custom-select').classList.remove('open');
            });
            option.setAttribute('data-option-bound', 'true');
        }
    };

    const filterOptions = (input) => {
        const filter = input.value.toLowerCase();
        const optionsList = input.closest('.custom-select').querySelector('.options-list');
        const options = optionsList.querySelectorAll('.option');
        let hasVisibleOption = false;

        options.forEach(option => {
            if (option.textContent.toLowerCase().includes(filter)) {
                option.style.display = 'block'; // 옵션 보이기
                hasVisibleOption = true;
            } else {
                option.style.display = 'none'; // 옵션 숨기기
            }
        });

        // 옵션이 하나도 없을 경우 리스트 숨김
        optionsList.style.display = hasVisibleOption ? 'block' : 'none';
    };

    document.querySelectorAll('.custom-select').forEach(select => {
        bindCustomSelectEvents(select);
        const input = select.querySelector('.select-search');
        if (input) {
            input.addEventListener('input', function() {
                filterOptions(this);
            });
        }
    });

    document.querySelectorAll('.options-list .option').forEach(bindOptionEvents);

    const observer = new MutationObserver(() => {
        document.querySelectorAll('.custom-select').forEach(bindCustomSelectEvents);
        document.querySelectorAll('.options-list .option').forEach(bindOptionEvents);
    });

    observer.observe(document.body, { childList: true, subtree: true });

    document.addEventListener('click', function(event) {
        document.querySelectorAll('.custom-select.open').forEach(select => {
            if (!select.contains(event.target)) {
                select.classList.remove('open');
            }
        });
    });
});




/* textarea 글자 수 */
$(".comment-content").keyup(function (e) {
    var content = $(this).val();
    if (content.length == 0 || content == "") {
        $(".comment_length").text('0');
    } else {
        $(".comment_length").text(content.length);
    }
    if (content.length > 1000) {
        // 1000자 부터는 타이핑 되지 않도록
        $(this).val($(this).val().substring(0, 200));
        // 1000자 넘으면 알림창 뜨도록
    };
});



/* 체크박스 // all_check를 누르면 item_check가 컨트롤됨 */
(function() {
    const allCheck = document.getElementById('all_check');
    const itemChecks = document.querySelectorAll('.item_check');

    allCheck.addEventListener('change', function () {
        itemChecks.forEach(itemCheck => {
            itemCheck.checked = allCheck.checked;
        });
    });

    itemChecks.forEach(itemCheck => {
        itemCheck.addEventListener('change', function () {
            if (!itemCheck.checked) {
                allCheck.checked = false;
            } else if (Array.from(itemChecks).every(chk => chk.checked)) {
                allCheck.checked = true;
            }
        });
    });
})();
