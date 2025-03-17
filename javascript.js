<script>
    const button = document, createElement ('button');
    button.textContent = 'Click Me';
    button.addeventListener('click' , () => {
        alert('Hello');
    });

    document.body.appendChild(button);
</script>