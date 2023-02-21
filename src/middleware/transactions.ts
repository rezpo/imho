import mongoose from "mongoose";

export default async function (callback: (arg: any) => Promise<void>) {
    let session;
    try {
        session = await mongoose.connection.startSession();
        session.startTransaction();

        await callback(session);
        await session.commitTransaction();
    } catch (err) {
        if (session) await session.abortTransaction();
        throw err;
    } finally {
        if (session) await session.endSession();
    }
}
