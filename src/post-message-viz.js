looker.plugins.visualizations.add({
    id: 'post_message',
    label: 'Post Message Example Viz',
    options: {},
    create: function (element, config) {
        console.log('Creating visualization...')
        element.innerHTML =
            "<button id='post-message-btn' style='display: block; margin: 0 auto; font-size: 20px; padding: 10px 20px; background-color: #007bff; color: white; border: none; border-radius: 5px; cursor: pointer;'>Click me to call window.postMessage</button>"
        element.querySelector('#post-message-btn').addEventListener('click', function () {
            window.top.postMessage(
                {
                    type: 'custom_viz_message',
                    message: 'looker:Hello from the custom visualization!',
                },
                'http://localhost:5173'
            )
        })
    },
    update: function (data, element, config, queryResponse) {
        // no-op
    },
})
