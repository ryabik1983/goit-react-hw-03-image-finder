export default function ImageGalleryItem ({pokemon: {sprites, name, stats}}) {
    return (
        <div>
                <p>{name}</p>
                <img 
                src={sprites.other['official-artwork'].front_default}
                alt={name}
                width="240"
                height="100"
                />
                <ul>
                    {stats.map(
                        entry => (
                            <li key={entry.stat.name}>
                                {entry.stat.name}: {entry.base_stat}
                            </li>
                        )
                    )}
                </ul>
                </div>
    )

}
