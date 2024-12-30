import prisma from '@prisma/client';

export default async function postDish(req, res) {
    if (req.method !== 'PUT') {
        return res.status(405).json({ message: 'Invalid HTTP method' });
    }

    const dishData = req.body;
    const savedData = await prisma.mydishes.update({
        where: {
            id: dishData.id
        },
        data: dishData
    });

    res.json(savedData);
}
