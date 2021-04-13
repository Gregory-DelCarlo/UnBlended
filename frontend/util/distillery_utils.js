export const fetchDistilleries = () => (
    $.ajax({
        url: '/api/distilleries',
        method: 'GET'
    })
);

export const fetchDistillery = distId => (
    $.ajax({
        url: `/api/distilleries/${distId}`,
        method: 'GET'
    })
);


