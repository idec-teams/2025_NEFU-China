document.addEventListener('DOMContentLoaded', function() {
    const sideLinks = document.querySelectorAll('.broadside a');
    const broadsideContainer = document.querySelector('.broadside');
    const styleMap = {
        'side1': { fontSize: '1.7vw', color: '#ff8f78', display: 'block'},
        'side2': { fontSize: '1.7vw', color: '#ff8f78', display: 'block'},
        'side3': { fontSize: '1.7vw', color: '#ff8f78', display: 'block'},
        'side4': { fontSize: '1.7vw', color: '#ff8f78', display: 'block'},
        'side5': { fontSize: '1.7vw', color: '#ff8f78', display: 'block'},
    };

    // Smooth scroll to target section
    sideLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    let activeSectionId = null;

    function checkScroll() {
        const windowHeight = window.innerHeight;
        const triggerPoint = windowHeight * 0.2;

        let newActiveSectionId = null;

        // 遍历所有 content-box
        document.querySelectorAll('.content-box').forEach(section => {
            const rect = section.getBoundingClientRect();
            if (rect.top <= triggerPoint && rect.bottom >= triggerPoint) {
                newActiveSectionId = section.id;
            }
        });

        if (newActiveSectionId !== activeSectionId) {
            // 控制 broadside 固定位置
            if (newActiveSectionId) {
                broadsideContainer.style.position = 'fixed';
                broadsideContainer.style.marginTop = '10vh';
                broadsideContainer.style.marginRight = '1.1vh';
                broadsideContainer.style.top = '3vh';
            } else {
                broadsideContainer.style.position = '';
                broadsideContainer.style.marginTop = '';
                broadsideContainer.style.marginRight = '';
                broadsideContainer.style.top = '';
            }

            sideLinks.forEach(link => {
                const linkId = link.getAttribute('href').substring(1);
                const styles = styleMap[linkId];
                const parent = link.closest('.broadside_element');
                const submenuLinks = parent ? parent.querySelectorAll('.submenu a') : [];
                // console.log(submenuLinks);    

                if (linkId === newActiveSectionId) {
                    // 当前激活的主菜单项
                    link.style.fontSize = styles.fontSize;
                    link.style.color = styles.color;
                    link.style.display = styles.display;
                    // console.log(linkId)
                    // 只展开当前主菜单项下的 submenu a
                    submenuLinks.forEach(subA => {
                      //console.log(subA.style.display);
                        subA.style.display = 'block';
                    });
                } else {
                    // 非激活项恢复默认样式
                  if (linkId.startsWith('side')) {
                      console.log(linkId);
                      link.style.fontSize = '';
                      link.style.color = '';
                      link.style.display = '';
                    // 仅隐藏当前主菜单项下的 submenu a
                    submenuLinks.forEach(subA => {
                        subA.style.display = 'none';
                    });
                  }
                }
            });


            activeSectionId = newActiveSectionId;
        }
    }

    function checkWindowWidth() {
        const windowWidth = window.innerWidth;
        if (windowWidth <= 1050) {
            broadsideContainer.style.display = 'none';
            window.removeEventListener('scroll', checkScroll);
        } else {
            broadsideContainer.style.display = 'block';
            window.addEventListener('scroll', checkScroll);
            checkScroll();
        }
    }

    window.addEventListener('resize', checkWindowWidth);
    checkWindowWidth();
    checkScroll();
});

